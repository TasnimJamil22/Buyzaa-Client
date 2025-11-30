// export default function settings() {
//   return (
//     <div>
//       <h1>This is Settings</h1>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Switch } from "@heroui/switch";
import { Select, SelectItem } from "@heroui/select";
import { Card } from "@heroui/card";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("english");
  const [notifications, setNotifications] = useState(true);
  const [timezone, setTimezone] = useState("GMT+6");

  const handleSave = () => {
    // console.log({ username, language, notifications, timezone });
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h2 className="text-4xl font-semibold text-yellow-600 font-dancing">
        Settings
      </h2>

      <Card className="p-6 space-y-6 rounded-2xl shadow-lg">
        <Input
          label="Username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Select
          label="App Language"
          selectedKeys={[language]}
          onSelectionChange={(val) => setLanguage(String(Array.from(val)[0]))}
        >
          <SelectItem key="english">English</SelectItem>
          <SelectItem key="bangla">Bangla</SelectItem>
          <SelectItem key="hindi">Hindi</SelectItem>
        </Select>

        <div className="flex items-center justify-between">
          <p className="font-medium">Enable Notifications</p>
          <Switch isSelected={notifications} onValueChange={setNotifications} />
        </div>

        <Select
          label="Timezone"
          selectedKeys={[timezone]}
          onSelectionChange={(val) => setTimezone(String(Array.from(val)[0]))}
        >
          <SelectItem key="GMT+6">GMT+6 (Bangladesh)</SelectItem>
          <SelectItem key="GMT+5">GMT+5</SelectItem>
          <SelectItem key="GMT+7">GMT+7</SelectItem>
        </Select>

        <Button
          className="w-full py-5 text-base bg-accent text-white"
          onPress={handleSave}
        >
          Save Settings
        </Button>
      </Card>
    </div>
  );
}
