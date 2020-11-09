import { CircularProgress } from '@material-ui/core';
import React from 'react';
import './index.css';

export function LoadingComponent({ id }: { id: string }) {

  return (
    <div id={id} className="hidden">
      <CircularProgress />
    </div>
  );

}
