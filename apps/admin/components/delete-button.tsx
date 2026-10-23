"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "./ui";

export function DeleteButton({
  endpoint,
  label = "Delete",
}: {
  endpoint: string;
  label?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onDelete() {
    if (!confirm("Delete this item?")) return;
    setLoading(true);
    await fetch(endpoint, { method: "DELETE" });
    setLoading(false);
    router.refresh();
  }

  return (
    <Button variant="danger" onClick={onDelete} disabled={loading}>
      {loading ? "…" : label}
    </Button>
  );
}
