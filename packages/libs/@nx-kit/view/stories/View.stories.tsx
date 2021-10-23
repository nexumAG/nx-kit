import React from 'react';
import { View } from '../src';

export default {
  title: '@nx-kit/view',
  component: View,
};

export const Default = () => (
  <View
    elementType="main"
    height="200px"
    backgroundColor={{
      xs: 'primary500',
      sm: 'primary600',
      md: 'primary700',
      xl: 'primary800',
      xxl: 'secondary700',
      xxxl: 'secondary800',
    }}
    marginX={{ sm: '10', md: '20', xl: '40' }}
    opacity={0.5}
    font={{ xs: 'trebuchetNormal', sm: 'trebuchetBold', md: 'georgiaNormal' }}
  >
    Demo Text
  </View>
);

export const MarginPaddingXY = () => (
  <>
    <View
      height="50px"
      backgroundColor="primary800"
      marginY="20"
      marginX={{ xs: '20', md: '40' }}
    />
    <View
      height="50px"
      backgroundColor="primary800"
      marginY="20"
      paddingY={{ xs: '20', md: '40' }}
    />
  </>
);

export const NativeGap = () => (
  <View gapNative="20px" display="flex" flexWrap="wrap" width="100%">
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
    <View
      flexBasis={{ xs: '100%', md: 'calc(25% - 20px)' }}
      flexGrow={1}
      backgroundColor="#ccc"
      padding="20px"
    >
      Box
    </View>
  </View>
);

// export const Test = () => (
//   <>
//     {Array.from(Array(300)).map((index) => (
//       <View
//         key={index}
//         marginTop="20"
//         marginBottom={{ xs: '20', md: '40' }}
//         paddingTop={{ xs: '20', md: '40' }}
//         paddingLeft={{ md: '60px', lg: '80px' }}
//         backgroundColor={{ xs: 'red', md: 'blue', lg: 'black' }}
//       />
//     ))}
//   </>
// );
//
// export const Test2 = () => (
//   <>
//     {Array.from(Array(300)).map((index) => (
//       <div
//         key={index}
//         style={{ paddingTop: '40px', backgroundColor: 'red', marginBottom: '40px' }}
//       />
//     ))}
//   </>
// );
