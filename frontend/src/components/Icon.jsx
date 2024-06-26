import React, { Suspense, lazy, useMemo } from "react";
import { CircularProgress } from "@mui/material";

// Lazy load icon component based on the name
const loadIcon = (iconName) => {
  return lazy(() =>
    import("@mui/icons-material").then((module) => ({
      default: module?.[iconName] || module.HelpOutline,
    }))
  );
};

const Icon = React.memo(({ iconName, size, ...props }) => {
  const IconComponent = useMemo(() => loadIcon(iconName), [iconName]);
  return (
    <Suspense fallback={<CircularProgress size={20} />}>
      <IconComponent fontSize={size} {...props} />
    </Suspense>
  );
});

Icon.displayName = "Icon";

export default Icon;
