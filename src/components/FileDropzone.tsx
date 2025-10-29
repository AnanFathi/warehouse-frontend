"use client";

import { UploadSimpleIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Button } from "./ui/button";
import { styleSplitText } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function FileUploadDropzone() {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

  // Simulated upload
  const uploadFile = async (file: File) => {
    setIsUploading(true);
    console.log("Uploading:", file.name);
    await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate delay
    console.log("✅ Upload complete!");
    setIsUploading(false);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    setFile(acceptedFiles[0]);
  }, []);

  const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
    fileRejections.forEach((rejection: any) => {
      const { file, errors } = rejection;
      console.warn(`❌ File "${file.name}" rejected:`);
      errors.forEach((e: any) => console.warn("  -", e.message));
    });
    alert(t("DRAG_REJECT"));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    maxSize: MAX_SIZE,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    disabled: isUploading,
  });

  const handleClearFile = () => setFile(null);

  const handleUpload = async () => {
    if (!file) return;
    await uploadFile(file);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        {...getRootProps()}
        className={`w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors relative
          ${isDragActive ? "border-primary bg-secondary" : "border-gray-300"}
          ${isUploading ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-primary border-solid" />
            <p className="text-gray-500 text-xs">{t("DRAG_UPLOADING")}</p>
          </div>
        ) : isDragActive ? (
          <div className="flex flex-col items-center gap-2">
            <UploadSimpleIcon className="text-primary" weight="bold" />
            <p className="text-xs">{t("DRAG_ACTIVE")}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <UploadSimpleIcon className="text-primary" weight="bold" />
            <p className="text-xs">
              {styleSplitText(t("DRAG_IDLE"), ["text-primary font-semibold"])}
            </p>
          </div>
        )}
      </div>

      {file && (
        <div className="flex items-center justify-between w-full max-w-md border rounded-md px-3 py-2 bg-gray-50">
          <span className="truncate text-sm text-gray-700">{file.name}</span>

          <div className="flex items-center gap-2">
            <Button onClick={handleUpload} disabled={isUploading}>
              {isUploading ? t("DRAG_UPLOADING") : t("UPLOAD")}
            </Button>

            <button
              onClick={handleClearFile}
              disabled={isUploading}
              className="text-gray-500 hover:text-red-500 transition-colors text-lg font-bold"
            >
              <XIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
