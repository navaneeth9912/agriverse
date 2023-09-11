/** @jsxImportSource @emotion/react */

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Box from '~/components/Atoms/Box';
import { Text } from '~/components/Atoms/Text';
import theme from '~/theme';
import { handleDownloadImages } from '~/utilis/handleDowloadImage';
import { jsx, css } from '@emotion/react';




const DisplayData = (item :any) => {
    const displayCss = css`
    @media (max-width: 480px) {
        width: 140px;
    }
`;
    return (
        <>
            {item.item.type && (
                <>
                    {item.item.type === 'string' && (
                        <Box display="flex" width="350px">
                            <Text css={displayCss} width="160px" weight="medium" padding='2px'>
                                {item.item.label}
                            </Text>
                            <Text width="30px" padding='2px' css={css`width:0px;`}>:</Text>
                            {item.item.value ? (
                                <Text width="160px" padding='2px'>
                                    {item.item.value}
                                </Text>
                            ) : (
                                <Text width="160px" color={theme.colors.redA} padding='2px'>
                                    Not Available
                                </Text>
                            )}
                        </Box>
                    )}
                </>
            )}
        </>
    );
}

export default DisplayData;