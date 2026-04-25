import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUserStore } from "../store/user.store";

export default function Profile() {
  const { user } = useUserStore();
  const form = useForm({
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      phone: user?.phone_number,
      email: user?.email,
    },
  });
  useEffect(() => {
    const file = form.getValues("file");
  }, [form.watch("file")]);
  return (
    <div className="min-h-screen font-sans" style={{ background: "#191919" }}>
      <div
        className="flex border-b"
        style={{ background: "#222222", borderColor: "#2e2e2e" }}
      >
        <div
          className="flex flex-1 items-center gap-3 px-6 py-4 border-r"
          style={{ borderColor: "#2e2e2e", background: "#191919" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0"
            style={{ background: "#2a6fdb" }}
          >
            1
          </div>
          <span className="text-sm font-semibold text-white">My account</span>
        </div>

        {/* Step 2 */}
        <div
          className="flex flex-1 items-center gap-3 px-6 py-4 border-r"
          style={{ borderColor: "#2e2e2e" }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
            style={{ background: "#2e2e2e", color: "#555" }}
          >
            2
          </div>
          <span className="text-sm font-semibold" style={{ color: "#555" }}>
            Security
          </span>
        </div>

        {/* Step 3 */}
        <div className="flex flex-1 items-center gap-3 px-6 py-4">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
            style={{ background: "#2e2e2e", color: "#555" }}
          >
            3
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold" style={{ color: "#555" }}>
              Make Payment
            </span>
            <span className="text-xs" style={{ color: "#444" }}>
              Add Payment Options
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-12 px-12 py-10 items-start">
        {/* Avatar */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-32 h-32 rounded-full overflow-hidden border-2 flex items-center justify-center"
            style={{ background: "#1a2540", borderColor: "#2e2e2e" }}
          >
            <span className="text-4xl font-bold" style={{ color: "#4a7fd4" }}>
              JW
            </span>
          </div>
          <label
            htmlFor="file"
            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer -mt-4 ml-20 relative z-10 border-2"
            style={{ background: "#2a2a2a", borderColor: "#191919" }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="#888"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
              />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <input
              {...form.register("file")}
              id="file"
              className="hidden"
              type="file"
            />
          </label>
        </div>

        {/* Form */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white mb-7">My profile</h2>

          {/* First Name */}
          <div className="mb-5">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#888" }}
            >
              First Name
            </label>
            <input
              type="text"
              defaultValue={user?.firstname}
              {...form.register("firstname")}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
              style={{
                background: "#242424",
                border: "1px solid #2e2e2e",
                color: "#ddd",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2a6fdb")}
              onBlur={(e) => (e.target.style.borderColor = "#2e2e2e")}
            />
            <p className="text-xs mt-1.5" style={{ color: "#444" }}>
              Please enter your first name.
            </p>
          </div>

          {/* Last Name */}
          <div className="mb-5">
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "#888" }}
            >
              Last Name
            </label>
            <input
              type="text"
              {...form.register("lastname")}
              defaultValue={user?.lastname}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
              style={{
                background: "#242424",
                border: "1px solid #2e2e2e",
                color: "#ddd",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#2a6fdb")}
              onBlur={(e) => (e.target.style.borderColor = "#2e2e2e")}
            />
            <p className="text-xs mt-1.5" style={{ color: "#444" }}>
              Please enter your last name.
            </p>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#888" }}
              >
                Phone
              </label>
              <input
                type="text"
                defaultValue={user?.phone}
                {...form.register("phone")}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                style={{
                  background: "#242424",
                  border: "1px solid #2e2e2e",
                  color: "#ddd",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2a6fdb")}
                onBlur={(e) => (e.target.style.borderColor = "#2e2e2e")}
              />
              <p className="text-xs mt-1.5" style={{ color: "#444" }}>
                Please enter your phone number.
              </p>
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#888" }}
              >
                Email
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                {...form.register("email")}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                style={{
                  background: "#242424",
                  border: "1px solid #2e2e2e",
                  color: "#ddd",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2a6fdb")}
                onBlur={(e) => (e.target.style.borderColor = "#2e2e2e")}
              />
              <p className="text-xs mt-1.5" style={{ color: "#444" }}>
                Please enter your email address.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-3">
            <button
              className="px-8 py-3 rounded-lg text-sm font-semibold text-white cursor-pointer transition-colors"
              style={{ background: "#1e4fa8", border: "none" }}
              onMouseOver={(e) => (e.target.style.background = "#2a6fdb")}
              onMouseOut={(e) => (e.target.style.background = "#1e4fa8")}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
