import React from "react";

const ConfirmDialog = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay mờ nền */}
      <div className="fixed inset-0 backdrop-blur-sm bg-black/20"></div>

      {/* Nội dung dialog */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[350px] z-10">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
