/** @jsxImportSource @emotion/react */
"use client"
import React from 'react';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import { jsx, css } from '@emotion/react';

const paperStyle = css`
@media (max-width: 480px) {
  padding: 0px;
  margin: 0px;
}

`

const PageLayout = ({ Header, subHead, children }: { Header: React.ReactNode, subHead?: React.ReactNode, children: React.ReactNode }) => {
  const maxHeight = subHead ? `calc(100vh - 148px)` : `calc(100vh - 86px)`;
  const minHeight = subHead ? `calc(100vh - 148px)` : `calc(100vh - 86px)`;

  
  return (
    <Box display="flex" flexDirection="column" gap="12px" backgroundColor="none">
      {Header}
      {subHead}
      <Paper css={paperStyle} elevation={1} overflowy="scroll" style={{ maxHeight, minHeight }}>
        {children}
      </Paper>
    </Box>
  );
};

export default PageLayout;
