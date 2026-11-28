import Card from "@/components/ui/card";

type MetricCardProps = {
  label: string;
  value: string | number;
  detail?: string;
};

export default function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <Card>
      <p className="text-sm text-gray-600">{label}</p>

      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>

      {detail && <p className="mt-1 text-xs text-gray-500">{detail}</p>}
    </Card>
  );
}
