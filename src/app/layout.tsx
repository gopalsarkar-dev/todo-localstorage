import TopBar from "@/components/Headers/TopBar";
import "./globals.css";
import ThemeProvider from "@/components/Headers/ThemeProvider";

type RootLayoutProviderProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProviderProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <TopBar />
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
