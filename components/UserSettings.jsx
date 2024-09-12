import React, {useState} from "react";

const UserSettings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [notificationSound, setNotificationSound] = useState(true);
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState("medium");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Event handlers
    const handleSave = () => {
        // Save settings logic
        alert("Settings saved!");
    };

    return (
      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-xl bg-input-field focus:outline outline-2 outline-[#1A8DFF] w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl bg-input-field focus:outline outline-2 outline-[#1A8DFF] w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl bg-input-field focus:outline outline-2 outline-[#1A8DFF] w-full"
          />
        </div>

        <div className="flex flex-col gap-2 items-end">
          <button
            onClick={handleSave}
            className="bg-[#1A8DFF] text-white px-4 py-2 rounded-xl w-fit"
          >
            Save Settings
          </button>
        </div>
      </div>
    );
};

export default UserSettings;
