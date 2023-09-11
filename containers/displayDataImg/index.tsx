import React from 'react';
import { FiDownload } from 'react-icons/fi';
import Box from '~/components/Atoms/Box';
import { Text } from '~/components/Atoms/Text';
import theme from '~/theme';
import { handleDownloadImages } from '~/utilis/handleDowloadImage';


const DisplayDataImg = (item: any) => {
    return (
        <>
            {item.item.type &&  (
                <>
                    {item.item.type === 'image' && (
                        <Box display='flex' alignItems='center' gap='20px'>
                            <Text width='200px'>{item.item.label}</Text>
                            {item?.item.value?.location ?
                                <a href={item?.item?.value?.location || ''} target="_blank"  onClick={() => handleDownloadImages(item?.item?.value?.location, item.item.label)}>
                                    <FiDownload color={theme.colors.blackA} fontSize='24px' />
                                </a> :
                                <Text width="15px" color={theme.colors.redA}>
                                    N/A
                                </Text>
                            }
                        </Box>
                    )}
                </>
            )}
        </>
    );
}

export default DisplayDataImg;