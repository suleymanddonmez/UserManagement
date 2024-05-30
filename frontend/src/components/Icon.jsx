import React, { Suspense, lazy, useMemo } from "react";
import { CircularProgress } from "@mui/material";

// Lazy load icon component based on the name
const loadIcon = (iconName) => {
  return lazy(() =>
    import("@mui/icons-material").then((module) => ({
      default: module[iconName],
    }))
  );
};

const Icon = React.memo(({ iconName, ...props }) => {
  const IconComponent = useMemo(() => loadIcon(iconName), [iconName]);
  return (
    <Suspense fallback={<CircularProgress size={20} />}>
      <IconComponent {...props} />
    </Suspense>
  );
});

Icon.displayName = "Icon";

export default Icon;
