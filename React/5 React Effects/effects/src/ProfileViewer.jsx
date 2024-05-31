import { useState, useEffect } from "react";
import ProfileSearchForm from "./ProfileSearchForm";
import axios from "axios";
const base_url = "https://api.github.com/users/";
export default function ProfileViewer() {
    const [profile, setProfile] = useState({ data: null, loading: false });
    async function fetchProfile(username = "Abhishek10351") {
        const response = await axios.get(base_url + username)
            .then((response) => {
                const data = response.data;
                setProfile({ data: data, loading: false });
            })
            .catch((error) => {
                console.log("Error fetching profile");
                setProfile({ data: null, loading: false });
            });
    }
    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <div>
            <h1>Profile Viewer</h1>
            <ProfileSearchForm search={fetchProfile} />
            {profile.loading ? (
                <p className="loading"></p>
            ) : profile.data ? (
                <div>
                    <h2>{profile.data.login}</h2>
                    <img
                        src={profile.data.avatar_url}
                        alt={profile.data.login}
                    />
                </div>
            ) : (
                <p>No profile to display</p>
            )}
        </div>
    );
}
