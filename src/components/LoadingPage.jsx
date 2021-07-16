import React from 'react'
import ContentLoader from "react-content-loader";


const LoadingPage = () => {
   return (
      <ContentLoader
          speed={2}
          width={160}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="31" cy="31" r="15" />
          <rect x="0" y="0" rx="10" ry="10" width="160" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="160" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="220" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
   )
}

export default LoadingPage