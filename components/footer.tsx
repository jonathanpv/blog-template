export default function Footer() {
  return (
    <footer className="bg-background ">
      <div className="max-w-2xl mx-auto p-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
