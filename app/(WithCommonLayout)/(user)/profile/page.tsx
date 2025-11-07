"use client";

import { useState } from "react";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Input } from "@heroui/input";
import { useUser } from "@/context/user.provider";

export default function ProfilePage() {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [mobile, setMobile] = useState(user?.mobileNumber || "");

  const handleSave = () => {
    // TODO: connect API update logic here
    console.log("Profile updated:", { name, email, mobile });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen   flex flex-col items-center py-10 px-4">
      <Card className="w-full max-w-md shadow-lg rounded-3xl border border-amber-100 bg-white/70 backdrop-blur-sm">
        <CardHeader className="flex flex-col items-center gap-3 py-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-300 to-pink-200 flex items-center justify-center text-xl font-semibold text-white shadow-md">
            {user?.name?.[0] || "U"}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </CardHeader>

        <CardBody className="space-y-4">
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />
          <Input label="Email" value={email} disabled />
          <Input
            label="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            disabled={!isEditing}
          />
        </CardBody>

        <CardFooter className="flex justify-between mt-4">
          {isEditing ? (
            <>
              <Button
                onPress={handleSave}
                className="bg-gradient-to-r from-amber-400 to-pink-400 text-white px-6 py-2 rounded-xl shadow-md hover:opacity-90"
              >
                Save
              </Button>
              <Button
                onPress={() => setIsEditing(false)}
                variant="bordered"
                className="border-amber-200 text-amber-700"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              onPress={() => setIsEditing(true)}
              className="bg-gradient-to-r from-amber-300 to-pink-300 text-white px-6 py-2 rounded-xl shadow-md hover:opacity-90"
            >
              Edit Profile
            </Button>
          )}
        </CardFooter>
      </Card>

      <div className="mt-8 text-center space-y-3">
        <Button className="w-48 bg-gradient-to-r from-rose-300 to-rose-400 text-white rounded-xl shadow hover:opacity-90">
          Logout
        </Button>
        <p className="text-sm text-gray-500">Want to delete your account?</p>
        <Button
          variant="bordered"
          className="border-red-300 text-red-500 hover:bg-red-50"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}
