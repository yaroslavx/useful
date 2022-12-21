import { useEffect, useState } from "react";

type MyQueryResponse = { data: unknown | undefined; error: Error | undefined; loading: boolean };

export const useMyQuery = (url: string, params: RequestInit = {}): MyQueryResponse => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();
    const [data, setData] = useState<unknown>();

    useEffect(() => {
        const controller = new AbortController();
        // устанавливаем состояние загрузки
        setLoading(true);

        // отправляем запрос
        fetch(url, { ...params, signal: controller.signal })
            // полученный ответ устанавливаем как данные
            .then(res => setData(res))
            // в случае ошибки устанавливаем ее
            .catch(err => setError(err))
            // в любом случае (успех/ошибка) убираем состояние загрузки
            .finally(() => setLoading(false));

        return () => {
            // в случае изменения параметров до нового запроса предотвращаем старый запрос
            controller.abort();
        }
    }, [url, params]);

    // информацию об ошибке, загрузке и данные отправляем наружу
    return { data, error, loading };
};