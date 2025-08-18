'use client';

import React, { useState } from 'react';
import { 
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  X
} from 'lucide-react';

// 16. Alert Banners Component
export function AlertBanners() {
  const alerts = [
    {
      type: "success",
      title: "Success!",
      message: "Your changes have been saved successfully.",
      icon: CheckCircle
    },
    {
      type: "warning",
      title: "Warning",
      message: "Please review your input before proceeding.",
      icon: AlertCircle
    },
    {
      type: "error",
      title: "Error",
      message: "Something went wrong. Please try again.",
      icon: XCircle
    },
    {
      type: "info",
      title: "Information",
      message: "New features are available in the latest update.",
      icon: Info
    }
  ];

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "error":
        return "bg-red-50 border-red-200 text-red-800";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Alert Components</h2>
          <p className="text-gray-600">Different types of notification alerts</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className={`border rounded-lg p-4 ${getAlertStyles(alert.type)}`}>
              <div className="flex items-start">
                <alert.icon className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{alert.title}</h3>
                  <p className="text-sm mt-1">{alert.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// 18. Data Table Component
export function DataTable() {
  const data = [
    { id: 1, name: "ERP Implementation", status: "Completed", progress: 100, priority: "High" },
    { id: 2, name: "AI Integration", status: "In Progress", progress: 75, priority: "Medium" },
    { id: 3, name: "Custom Development", status: "Pending", progress: 0, priority: "Low" },
    { id: 4, name: "System Testing", status: "In Progress", progress: 45, priority: "High" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getProgressWidth = (progress: number) => {
    if (progress === 0) return 'w-0';
    if (progress <= 10) return 'w-[10%]';
    if (progress <= 20) return 'w-[20%]';
    if (progress <= 30) return 'w-[30%]';
    if (progress <= 40) return 'w-[40%]';
    if (progress <= 50) return 'w-[50%]';
    if (progress <= 60) return 'w-[60%]';
    if (progress <= 70) return 'w-[70%]';
    if (progress <= 80) return 'w-[80%]';
    if (progress <= 90) return 'w-[90%]';
    return 'w-full';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-lime-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Table</h2>
          <p className="text-gray-600">Interactive data table with sorting and filtering</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-blue-600 h-2 rounded-full transition-all duration-300 ${getProgressWidth(row.progress)}`}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{row.progress}%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span className={getPriorityColor(row.priority)}>{row.priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// 19. Modal Dialog Component
export function ModalDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Modal Dialog</h2>
          <p className="text-gray-600">Interactive modal dialog component</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Open Modal
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Modal Title</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                This is an example modal dialog. You can add any content here including forms, images, or other components.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// 20. Notification Toast Component
export function NotificationToast() {
  const [toasts, setToasts] = useState<Array<{id: number, type: string, message: string}>>([]);

  const addToast = (type: string, message: string) => {
    const newToast = { id: Date.now(), type, message };
    setToasts(prev => [...prev, newToast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== newToast.id));
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Notification Toasts</h2>
          <p className="text-gray-600">Interactive toast notifications</p>
        </div>
        <div className="text-center space-x-4">
          <button
            onClick={() => addToast("success", "Success! Your action was completed.")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Success Toast
          </button>
          <button
            onClick={() => addToast("error", "Error! Something went wrong.")}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Error Toast
          </button>
          <button
            onClick={() => addToast("warning", "Warning! Please check your input.")}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Warning Toast
          </button>
          <button
            onClick={() => addToast("info", "Info: New updates available.")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Info Toast
          </button>
        </div>

        <div className="fixed top-4 right-4 z-50 space-y-2">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`${getToastStyles(toast.type)} rounded-lg p-4 shadow-lg max-w-sm flex items-center justify-between`}
            >
              <span>{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 text-white hover:text-gray-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 