import { builder } from '@/api/builder';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router'
import React from 'react'

export default function CoinDetails() {
  const {query, back} = useRouter()

   //get individual designation details
   const { data: DetailsDetails } = useQuery({
    queryFn: () =>
      builder.use().asset.details(query?.id as string),
    queryKey: builder.asset.details
    .use(
      query?.id as string
    ),
    select: ({ data }) => data,
    enabled: !!query?.id,
  });
  console.log({DetailsDetails})
  return (
    <div>{DetailsDetails?.name}</div>
  )
}
