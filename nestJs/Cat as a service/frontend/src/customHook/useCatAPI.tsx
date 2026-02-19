import { useEffect, useState } from "react";

interface NewCatData {
  author: string;
  href: string;
  taken_from: string;
}

export interface CatProp extends NewCatData {
  id: string;
}

interface CatGetReturn {
  data: CatProp[] | null;
  loading: boolean;
  error: string | null;
}

export interface API_info {
  catsLength: Number[];
  loading: boolean;
  error: string | null;
}

export interface PostApi {
  responseMessage: string;
  loading: boolean;
  error: string | null;
}

export const useGetCat = (url: string | null): CatGetReturn => {
  const [data, setData] = useState<CatProp[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        const finalData = Array.isArray(data) ? data : [data];

        setData(finalData);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Unkonw error detected");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, loading, error };
};

// The update variable will work as a ward, everytime we update the "database" we'll change the
// update to !update, by that I mean, update = !update.
export const useGetAPIInfo = (url: string, update: boolean): API_info => {
  const [catsLength, setCatsLength] = useState<Number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        setCatsLength(data);
        setError("");
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Unkonw error detected");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url, update]);

  return { catsLength, loading, error };
};
