type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {description && (
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      )}
    </header>
  );
}
