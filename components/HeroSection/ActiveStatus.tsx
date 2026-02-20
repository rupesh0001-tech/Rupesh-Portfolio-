"use client";

const statusConfig: Record<string, { color: string; label: string }> = {
  online: { color: "bg-green-500", label: "Online" },
  idle: { color: "bg-yellow-500", label: "Idle" },
  dnd: { color: "bg-red-500", label: "Do Not Disturb" },
  offline: { color: "bg-gray-500", label: "Offline" },
};

const ActiveStatus = () => {
  const status = "online";
  const { color, label } = statusConfig[status] ?? statusConfig.offline;

  return (
    <div className="absolute right-[0.7] bottom-[0.7] z-10 h-2 w-2 rounded-full border-2 border-gray-200 bg-gray-100 p-2 dark:border-gray-800 dark:bg-black">
      <span
        className={`border-background absolute right-[4] bottom-[4] size-2 rounded-full ${color}`}
      />
    </div>
  );
};

export default ActiveStatus;
