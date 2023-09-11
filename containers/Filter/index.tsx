import React from 'react';
import { useFormik } from 'formik';
import * as Dialog from "@radix-ui/react-dialog";
import Box from '~/components/Atoms/Box';
import { DialogContent, DialogOverlay, DialogTitle } from '~/components/molecules/Dailog';
import { RiFilter2Fill } from 'react-icons/ri';
import { Text } from '~/components/Atoms/Text';
import { Button } from '~/components/Atoms/Button';
import { CustomCheckbox } from '~/components/molecules/inputField';
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from '~/components/Atoms/Range';

// interface FilterValues {
//   productName: string[];
//   varieties: string[];
//   certifications: string[];
//   origin: string[];
//   priceRange: [number, number];
//   cuppingScore: [number, number];
// }

const Filters = ({handleClear,handleCheckboxChange,formik,applyFilter}:{handleClear:any,handleCheckboxChange:any,formik:any,applyFilter:any}) => {
  // const initialValues: FilterValues = {
  //   productName: [],
  //   varieties: [],
  //   certifications: [],
  //   origin: [],
  //   priceRange: [120, 500],
  //   cuppingScore: [0, 100],
  // };

  // const formik = useFormik({
  //   initialValues,
  //   onSubmit: (values: FilterValues) => {
  //     console.log(values);
  //   },
  // });

  // const handleCheckboxChange = (name: keyof FilterValues, value: string) => {
  //   const propertyValues = formik.values[name] as string[];
  //   if (propertyValues.includes(value)) {
  //     formik.setFieldValue(name, propertyValues.filter(v => v !== value));
  //   } else {
  //     formik.setFieldValue(name, [...propertyValues, value]);
  //   }
  // };


  // const handleClear = () => {
  //   formik.resetForm();
  // };


  return (
    <Box>
      <Dialog.Root>
        <Dialog.Trigger asChild style={{ cursor: 'pointer' }}>
          <RiFilter2Fill fontSize="25px" />
        </Dialog.Trigger>
        <DialogOverlay />
        <DialogContent top='0px' left='0px' height='100vh' width='305px' pd='20px 20px' style={{ overflowY: 'auto', maxHeight: '100vh' }}>
          <Box display='flex' flexDirection='column' gap='15px'>
            <DialogTitle>
              <Box display='flex' justifyContent='space-between'>
                <Text size='xlarge' weight='xlarge'>Filters</Text>
                <Dialog.Close style={{background:'none', border:'none'}}>
                <Text size='large' weight='xlarge' style={{ cursor: 'pointer' }} onClick={() => handleClear()}>Clear</Text>
                </Dialog.Close>
              </Box>
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
              <Box display='flex' flexDirection='column' gap='20px'>
                <Box>
                  <Text size='large' weight='large'>Product Name</Text>
                  <Box display='flex' flexDirection='column' pl='10px'>
                    {[
                      "Parchment",
                      "Dry cherry",
                      "Green Coffee Beans",
                      "Roasted Coffee Beans",
                      "Instant Coffee",
                      "Agglomerated Coffee",
                      "Freeze Dried Coffee",
                      "Spray Dried Coffee"
                    ]
                      .map((productName) => (
                        <CustomCheckbox
                          possible={true}
                          label={productName}
                          checked={formik.values.productName.includes(productName)}
                          onChange={() => handleCheckboxChange('productName', productName)}
                        />
                      ))}
                  </Box>
                </Box>
                <Box>
                  <Text size='large' weight='large'>Varieties</Text>
                  <Box display='flex' flexDirection='column' pl='10px'>
                    {["Arabica", "Robusta"].map((variety) => (
                      <CustomCheckbox
                        possible={true}
                        label={variety}
                        checked={formik.values.varieties.includes(variety)}
                        onChange={() => handleCheckboxChange('varieties', variety)}
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Text size='large' weight='large'>Certifications</Text>
                  <Box display='flex' flexDirection='column' pl='10px'>
                    {[ "Organic", "Rain Forest", "Smith Sonian"].map((certification) => (
                      <CustomCheckbox
                        possible={true}
                        label={certification}
                        checked={formik.values.certifications.includes(certification)}
                        onChange={() => handleCheckboxChange('certifications', certification)}
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Text size='large' weight='large'>Origin</Text>
                  <Box display='flex' flexDirection='column' pl='10px'>
                    {["Araku", "Chikkamagaluru", "Coorg"].map((origin) => (
                      <CustomCheckbox
                        possible={true}
                        label={origin}
                        checked={formik.values.origin.includes(origin)}
                        onChange={() => handleCheckboxChange('origin', origin)}
                      />
                    ))}
                  </Box>
                </Box>
                <Box>
                  <Text size='large' weight='large'>Price Range</Text>
                  <SliderRoot
                    value={formik.values.priceRange}
                    onValueChange={values => formik.setFieldValue('priceRange', values)}
                    max={9999}
                    min={100}
                    step={1}
                  >
                    <SliderTrack>
                      <SliderRange />
                    </SliderTrack>
                    <SliderThumb aria-label="Price Range Thumb" index={0} />
                    <SliderThumb aria-label="Price Range Thumb" index={1} />
                  </SliderRoot>
                  <Text>
                    Price: {formik.values.priceRange[0]} - {formik.values.priceRange[1]} rupees
                  </Text>
                </Box>

                <Box>
                  <Text size='large' weight='large'>Cupping Score</Text>
                  <SliderRoot
                    value={formik.values.cuppingScore}
                    onValueChange={values => formik.setFieldValue('cuppingScore', values)}
                    max={90}
                    min={60}
                    step={0.5}
                    defaultValue={[60,90]}
                  >
                    <SliderTrack>
                      <SliderRange />
                    </SliderTrack>
                    <SliderThumb aria-label="Cupping Score Range" index={0} >
                    </SliderThumb>
                    <SliderThumb aria-label="Cupping Score Range" index={1}>
                    </SliderThumb>
                  </SliderRoot>
                  <Text>
                    Cupping Score: {formik.values.cuppingScore[0]} - {formik.values.cuppingScore[1]}
                  </Text>
                </Box>
                <Dialog.Close style={{background:'none',border:'none' ,display:'flex', justifyContent:'center', outline:'none'}}> <Button width='200px' variant='primary' type='submit' onClick={()=>applyFilter()}>Apply Filters</Button></Dialog.Close>
              </Box>
            </form>
          </Box>
        </DialogContent>
      </Dialog.Root>
    </Box>
  );
}

export default Filters;
