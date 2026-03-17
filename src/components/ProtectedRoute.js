import { useEffect } from "react";
import { useRouter } from "next/router";
import { getToken } from "@/utils/auth";

export default function ProtectedRoute(Component) {
  return function Wrapper(props) {
    const router = useRouter();

    useEffect(() => {
      const token = getToken();
      if (!token) {
        router.replace("/login");
      }
    }, []);

    return <Component {...props} />;
  };
}
