import GlobalProvider from "../GlobalProvider";

export default function ServerLayout({ children }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
