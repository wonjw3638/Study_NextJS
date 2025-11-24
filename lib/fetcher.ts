// fetch() 함수를 사용해서 데이터를 받아오는 역할

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export default fetcher;