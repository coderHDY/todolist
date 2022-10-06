import React from 'react';
import {
  Skeleton,
} from '@mui/material';

export default function index() {
  return (
    <div style={{
      padding: "1rem"
    }}>
      <Skeleton animation="wave" sx={{ fontSize: '1rem', margin: "1rem 0" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rectangular" width={210} height={60} />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rounded" width={210} height={60} />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rounded" width={210} height={60} />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="text" />
      <Skeleton animation="wave" sx={{ fontSize: '1rem', marginBottom: "1rem" }} variant="rounded" width={210} height={60} />
    </div>
  )
}
