import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    setType(isVisible ? "password" : "text");
  };

  return (
    <>
      <div>
        <div className="mb-4 flex items-center">
          <input
            type={type}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="px-4 py-2 border rounded-l-md"
          />
          <span
            className="px-3 py-2 bg-gray-100 cursor-pointer border rounded-r-md"
            onClick={handleToggle}
          >
            {isVisible ? <Eye size={24} /> : <EyeOff size={24} />}
          </span>
        </div>
      </div>
    </>
  );
};

export default PasswordComponent;
