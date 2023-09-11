/** @jsxImportSource @emotion/react */
"use client"
import React from 'react';
import Box from '~/components/Atoms/Box';
import Paper from '~/components/Atoms/Paper';
import theme from '~/theme';
import AuthBox from '../AuthBox';
import Logo from '~/components/Atoms/Logo';
import { jsx, css } from '@emotion/react';

const AuthLayouts = ({ title, InputFileds }: { title: string, InputFileds: React.ReactNode }) => {

  const styles = css`
    display: grid;

    @media (max-width: 470px) {
      display: none;
    }
  `;
  const signinstyle = css`
  @media (max-width: 470px) {
    width: inherit;
  }
  `

  return (
    <Box display='flex' gap='12px' width='100%'>
      <Paper css={signinstyle} height='100%' elevation={3} borderRadius={4} backgroundColor={theme.colors.whiteA} minWidth='340px' padding={1} style={{ minHeight: `calc(100vh - 24px)`, maxHeight: `calc(100vh - 24px)` }} overflowY="scroll">
        <AuthBox title={title} InputFileds={InputFileds} />
      </Paper>
      <Paper
        css={styles}
        height='100%'
        elevation={3}
        borderRadius={4}
        backgroundColor={theme.colors.whiteA}
        width='100%'
        display='grid'
        placeItems='center'
        style={{ height: `calc(100vh - 24px)` }}
      >
        <Logo width={300} height={120} />
      </Paper>
    </Box>
  );
}

export default AuthLayouts;