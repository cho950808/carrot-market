import { useState } from "react";

interface useMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

export default function useMutation(
  url: string
): [(data?: any) => void, useMutationState] {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }

  return [mutation, { loading, data, error }];
}
