"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, File, Image, FileText, Music, Video, Archive, FileIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileItem {
  id: string;
  file: File;
  preview?: string;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

interface FileUploadProps {
  data?: {
    title?: string;
    subtitle?: string;
    maxFiles?: number;
    maxFileSize?: number; // in MB
    acceptedTypes?: string[];
    uploadButtonText?: string;
    dragText?: string;
  };
}

const getFileIcon = (file: File) => {
  const type = file.type.split('/')[0];
  switch (type) {
    case 'image':
      return Image;
    case 'video':
      return Video;
    case 'audio':
      return Music;
    case 'text':
      return FileText;
    default:
      if (file.name.endsWith('.zip') || file.name.endsWith('.rar')) {
        return Archive;
      }
      return FileIcon;
  }
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export default function FileUpload({ data = {} }: FileUploadProps) {
  const {
    title = "File Upload",
    subtitle = "Drag and drop files here or click to browse",
    maxFiles = 5,
    maxFileSize = 10, // 10MB
    acceptedTypes = ['*/*'],
    uploadButtonText = "Upload Files",
    dragText = "Drop files here"
  } = data;

  const [files, setFiles] = useState<FileItem[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((selectedFiles: FileList) => {
    const newFiles: FileItem[] = Array.from(selectedFiles).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'uploading' as const
    }));

    // Check file size limits
    const validFiles = newFiles.filter(item => {
      if (item.file.size > maxFileSize * 1024 * 1024) {
        item.status = 'error';
        item.error = `File size exceeds ${maxFileSize}MB limit`;
        return false;
      }
      return true;
    });

    // Check file count limits
    if (files.length + validFiles.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Generate previews for images
    validFiles.forEach(item => {
      if (item.file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          item.preview = e.target?.result as string;
          setFiles(prev => [...prev]);
        };
        reader.readAsDataURL(item.file);
      }
    });

    setFiles(prev => [...prev, ...validFiles]);
  }, [files.length, maxFiles, maxFileSize]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileSelect(droppedFiles);
    }
  }, [handleFileSelect]);

  const removeFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  }, []);

  const simulateUpload = useCallback(async () => {
    if (files.length === 0) return;

    setIsUploading(true);
    
    // Simulate upload progress
    for (const fileItem of files) {
      if (fileItem.status === 'error') continue;
      
      for (let progress = 0; progress <= 100; progress += 10) {
        setFiles(prev => prev.map(f => 
          f.id === fileItem.id ? { ...f, progress } : f
        ));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      setFiles(prev => prev.map(f => 
        f.id === fileItem.id ? { ...f, status: 'success' as const } : f
      ));
    }
    
    setIsUploading(false);
  }, [files]);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
              isDragOver
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-lg text-gray-600 mb-2">
              {isDragOver ? dragText : subtitle}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Maximum {maxFiles} files, {maxFileSize}MB each
            </p>
            <Button onClick={openFileDialog} className="px-6 py-3">
              Choose Files
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={acceptedTypes.join(',')}
              onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
              className="hidden"
            />
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Selected Files ({files.length})
                </h3>
                <Button 
                  onClick={simulateUpload} 
                  disabled={isUploading}
                  className="px-6 py-2"
                >
                  {isUploading ? 'Uploading...' : uploadButtonText}
                </Button>
              </div>

              <div className="space-y-3">
                {files.map((fileItem) => {
                  const Icon = getFileIcon(fileItem.file);
                  const isImage = fileItem.file.type.startsWith('image/');
                  
                  return (
                    <div
                      key={fileItem.id}
                      className={`bg-white rounded-lg border p-4 transition-all duration-200 ${
                        fileItem.status === 'error' ? 'border-red-200 bg-red-50' :
                        fileItem.status === 'success' ? 'border-green-200 bg-green-50' :
                        'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* File Icon/Preview */}
                        <div className="flex-shrink-0">
                          {isImage && fileItem.preview ? (
                            <img
                              src={fileItem.preview}
                              alt={fileItem.file.name}
                              className="w-12 h-12 rounded object-cover"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-gray-500" />
                            </div>
                          )}
                        </div>

                        {/* File Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {fileItem.file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(fileItem.file.size)}
                          </p>
                          {fileItem.error && (
                            <p className="text-xs text-red-600 mt-1">{fileItem.error}</p>
                          )}
                        </div>

                        {/* Progress/Status */}
                        <div className="flex items-center gap-3">
                          {fileItem.status === 'uploading' && (
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${fileItem.progress}%` }}
                              />
                            </div>
                          )}
                          {fileItem.status === 'success' && (
                            <span className="text-green-600 text-sm">✓ Complete</span>
                          )}
                          {fileItem.status === 'error' && (
                            <span className="text-red-600 text-sm">✗ Error</span>
                          )}
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(fileItem.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
