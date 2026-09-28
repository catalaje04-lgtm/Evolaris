/* @ds-bundle: {"format":4,"namespace":"EvolarisDesignSystem_db2578","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavButton","sourcePath":"components/navigation/NavButton.jsx"},{"name":"FOOTER_COLUMNS","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"SECTORS","sourcePath":"components/search/FilterTag.jsx"},{"name":"FilterTag","sourcePath":"components/search/FilterTag.jsx"},{"name":"SearchBar","sourcePath":"components/search/SearchBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4a0ee604d34d","components/core/Button.jsx":"2f9762eb3815","components/core/Card.jsx":"89da3f7564ab","components/core/IconButton.jsx":"56e45e25c868","components/core/Tag.jsx":"ed41cd323ca4","components/feedback/Toast.jsx":"5fd149230097","components/feedback/Tooltip.jsx":"5a69f4c1038d","components/forms/Checkbox.jsx":"c7f55b1b434b","components/forms/Input.jsx":"8d946c941a8b","components/forms/Radio.jsx":"4805c941bfe5","components/forms/Select.jsx":"e2b48f7fb966","components/forms/Switch.jsx":"a02951175e70","components/forms/Textarea.jsx":"b5eaaf86fa62","components/navigation/NavButton.jsx":"93d286a4e7ed","components/navigation/SiteFooter.jsx":"cdb4eaf1cecc","components/navigation/SiteHeader.jsx":"7a17bda2e2f1","components/navigation/Tabs.jsx":"034d594dfcfa","components/overlay/Dialog.jsx":"7d508183bd18","components/search/FilterTag.jsx":"b0c0cba78d28","components/search/SearchBar.jsx":"cc081589dd10","ui_kits/site/About.jsx":"f3d94ae33853","ui_kits/site/ContactForm.jsx":"f91a60b85b31","ui_kits/site/Footer.jsx":"a7dcafeb09c7","ui_kits/site/Header.jsx":"89a405573d8e","ui_kits/site/Home.jsx":"b67f54bd1cc1","ui_kits/site/Products.jsx":"993ac73f30c7","ui_kits/site/SectionHero.jsx":"3491c7f297bd","ui_kits/site/SectionIntro.jsx":"e622cb2c193f","ui_kits/site/Services.jsx":"1a1e00e6ff69","ui_kits/site/anchors.js":"4693533507fa","ui_kits/site/image-slot.js":"fff26d081c8d","ui_kits/site/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EvolarisDesignSystem_db2578 = window.EvolarisDesignSystem_db2578 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneColors = {
  neutral: {
    bg: "var(--color-gray-100)",
    fg: "var(--color-gray-800)"
  },
  primary: {
    bg: "var(--color-primary-tint-100)",
    fg: "var(--color-primary-active)"
  },
  error: {
    bg: "#FBE0E0",
    fg: "var(--color-error)"
  },
  warning: {
    bg: "#FCF6D8",
    fg: "#8A7900"
  }
};
function Badge({
  children,
  tone = "neutral"
}) {
  const c = toneColors[tone] || toneColors.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      background: c.bg,
      color: c.fg,
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "11px",
      letterSpacing: "var(--tracking-tight)",
      textTransform: "none"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: "8px 16px",
    fontSize: "11px"
  },
  md: {
    padding: "12px 18px",
    fontSize: "12px"
  },
  lg: {
    padding: "16px 32px",
    fontSize: "13px"
  }
};
const variants = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--color-black-950)",
    border: "1px solid transparent"
  },
  secondary: {
    background: "transparent",
    color: "var(--color-black-950)",
    border: "1px solid var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--color-black-950)",
    border: "1px solid transparent"
  },
  inverse: {
    background: "transparent",
    color: "var(--color-white-50)",
    border: "1px solid var(--color-white-50)"
  }
};
const hoverBg = {
  primary: "var(--color-primary-hover)",
  secondary: "var(--color-gray-100)",
  ghost: "var(--color-gray-50)",
  inverse: "rgba(252,252,252,0.14)"
};
const activeBg = {
  primary: "var(--color-primary-active)",
  secondary: "var(--color-gray-200)",
  ghost: "var(--color-gray-100)",
  inverse: "rgba(252,252,252,0.26)"
};
const hoverBorder = {
  secondary: "var(--color-gray-800)"
};
const activeBorder = {
  secondary: "var(--color-black-950)"
};
function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = false,
  arrow,
  disabled = false,
  onClick
}) {
  const [state, setState] = React.useState("idle");
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const bg = disabled ? v.background : state === "active" ? activeBg[variant] : state === "hover" ? hoverBg[variant] : v.background;
  const borderColor = disabled ? null : state === "active" ? activeBorder[variant] : state === "hover" ? hoverBorder[variant] : null;
  const showArrow = (arrow ?? variant === "primary") && !icon && !disabled;
  const open = state !== "idle";
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => !disabled && setState("hover"),
    onMouseLeave: () => !disabled && setState("idle"),
    onMouseDown: () => !disabled && setState("active"),
    onMouseUp: () => !disabled && setState("hover"),
    disabled: disabled,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-tight)",
      textTransform: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      borderRadius: "var(--radius-sm)",
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      gap: "8px",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      ...s,
      ...v,
      background: bg,
      ...(borderColor ? {
        border: `1px solid ${borderColor}`
      } : null)
    }
  }, icon && !iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "18px"
    }
  }, icon) : null, children, icon && iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "18px"
    }
  }, icon) : null, showArrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      overflow: "hidden",
      width: open ? "18px" : "0px",
      marginLeft: open ? "0px" : "-8px",
      transition: "width var(--duration-base) var(--ease-emphasized), margin-left var(--duration-base) var(--ease-emphasized), opacity var(--duration-base) var(--ease-emphasized)",
      opacity: open ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "18px",
      lineHeight: 1,
      transform: open ? "translate(0,0)" : "translate(-6px,6px)",
      transition: "transform var(--duration-base) var(--ease-emphasized)"
    }
  }, "arrow_outward")) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "24px",
  elevated = false,
  flat = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      padding,
      border: "1px solid var(--border-default)",
      boxShadow: flat ? "none" : elevated ? "var(--shadow-elevated)" : "var(--shadow-card)"
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  "aria-label": ariaLabel
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  const bg = variant === "primary" ? hover ? "var(--color-primary-hover)" : "var(--color-primary)" : hover ? "var(--color-gray-100)" : "transparent";
  const color = "var(--color-black-950)";
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel || icon,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      borderRadius: "var(--radius-sm)",
      border: variant === "secondary" ? "1px solid var(--border-strong)" : "1px solid transparent",
      background: bg,
      color,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: Math.round(dim * 0.5)
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  removable = false,
  onRemove
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 14px",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${selected ? "var(--color-primary)" : "var(--border-default)"}`,
      background: selected ? "var(--color-primary-tint-100)" : hover ? "var(--color-gray-50)" : "transparent",
      color: selected ? "var(--color-primary-active)" : "var(--color-black-950)",
      fontFamily: "var(--font-display)",
      fontSize: "12px",
      fontWeight: 500,
      letterSpacing: "var(--tracking-tight)",
      cursor: onClick ? "pointer" : "default",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, children, removable ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      fontSize: "14px"
    }
  }, "close") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const toneStyles = {
  info: {
    icon: "info",
    border: "var(--border-default)"
  },
  success: {
    icon: "check_circle",
    border: "var(--color-primary)"
  },
  error: {
    icon: "error",
    border: "var(--color-error)"
  }
};
function Toast({
  message,
  tone = "info",
  onClose
}) {
  const t = toneStyles[tone] || toneStyles.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 16px",
      background: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-elevated)",
      borderLeft: `3px solid ${t.border}`,
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--color-black-950)",
      minWidth: "260px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      color: t.border,
      fontSize: "20px"
    }
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    onClick: onClose,
    style: {
      cursor: "pointer",
      color: "var(--color-gray-500)",
      fontSize: "18px"
    }
  }, "close") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label,
  side = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }[side] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      background: "var(--color-black-950)",
      color: "var(--text-inverse)",
      padding: "6px 10px",
      borderRadius: "var(--radius-md)",
      fontSize: "12px",
      fontFamily: "var(--font-body)",
      whiteSpace: "nowrap",
      zIndex: 10
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-md)",
      border: `1px solid ${checked ? "var(--color-primary)" : "var(--border-strong)"}`,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "14px",
      color: "var(--color-primary)"
    }
  }, "check") : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--color-black-950)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
  disabled = false,
  icon,
  min,
  max,
  step
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      minWidth: 0
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "text-label",
    style: {
      fontSize: "11px",
      color: "var(--color-gray-700)",
      textTransform: "none"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "0 14px",
      minHeight: "var(--field-height)",
      boxSizing: "border-box",
      borderRadius: "var(--radius-md)",
      background: disabled ? "var(--color-gray-50)" : "#fff",
      border: `1px solid ${error ? "var(--color-error)" : focus ? "var(--color-primary)" : "var(--border-default)"}`,
      boxShadow: "none",
      transition: "border-color var(--duration-fast) var(--ease-standard)",
      opacity: disabled ? "var(--opacity-disabled)" : 1
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      color: "var(--color-gray-500)",
      fontSize: "18px"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: "none",
      outline: "none",
      flex: 1,
      width: "100%",
      minWidth: 0,
      font: "inherit",
      fontSize: "14px",
      background: "transparent",
      color: "var(--color-black-950)"
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--color-error)"
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      border: `1px solid ${checked ? "var(--color-primary)" : "var(--border-strong)"}`,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--color-primary)"
    }
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--color-black-950)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      minWidth: 0
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "text-label",
    style: {
      fontSize: "11px",
      color: "var(--color-gray-700)",
      textTransform: "none"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      minHeight: "var(--field-height)",
      boxSizing: "border-box",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${focus ? "var(--color-primary)" : "var(--border-default)"}`,
      background: disabled ? "var(--color-gray-50)" : "#fff",
      opacity: disabled ? "var(--opacity-disabled)" : 1
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      padding: "0 36px 0 14px",
      fontSize: "14px",
      color: "var(--color-black-950)",
      appearance: "none"
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--color-gray-500)",
      pointerEvents: "none",
      fontSize: "20px"
    }
  }, "keyboard_arrow_down")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled = false,
  label
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-sm)",
      background: checked ? "var(--color-primary)" : "var(--color-gray-300)",
      position: "relative",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      transition: "left var(--duration-base) var(--ease-standard)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.2)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--color-black-950)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value = "",
  onChange,
  rows = 4,
  maxWords,
  error,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  const words = value.trim() ? value.trim().split(/\s+/).length : 0;
  const over = maxWords ? words > maxWords : false;
  const border = error || over ? "var(--color-error)" : focus ? "var(--color-primary)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-body)",
      minWidth: 0
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "text-label",
    style: {
      fontSize: "11px",
      color: "var(--color-gray-700)",
      textTransform: "none"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      border: `1px solid ${border}`,
      background: disabled ? "var(--color-gray-50)" : "#fff",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      padding: "10px 14px",
      transition: "border-color var(--duration-fast) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => {
      const next = e.target.value;
      if (maxWords && next.trim().split(/\s+/).filter(Boolean).length > maxWords && next.length > value.length) return;
      onChange && onChange(next);
    },
    style: {
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "inherit",
      fontSize: "14px",
      lineHeight: "20px",
      color: "var(--color-black-950)",
      resize: "vertical",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "12px"
    }
  }, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: "var(--color-error)"
    }
  }, error) : /*#__PURE__*/React.createElement("span", null), maxWords ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: over ? "var(--color-error)" : "var(--color-gray-500)"
    }
  }, words, "/", maxWords, " palabras") : null));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavButton.jsx
try { (() => {
function NavButton({
  children,
  active = false,
  disabled = false,
  hoverAccent = "primary",
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const on = active || pressed || (hover || focus) && !disabled;
  const accent = active || pressed ? "var(--color-primary-active)" : hoverAccent === "ink" ? "var(--color-black-950)" : "var(--color-primary)";
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    disabled: disabled,
    style: {
      position: "relative",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "13px",
      letterSpacing: "var(--tracking-tight)",
      color: !disabled && (active || pressed) ? "var(--color-primary-active)" : !disabled && hoverAccent === "primary" && hover ? "var(--color-primary)" : "var(--color-black-950)",
      background: "transparent",
      border: "1px solid transparent",
      borderRadius: "var(--radius-md)",
      outline: "none",
      padding: "6px 2px 10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 2,
      right: 2,
      bottom: 2,
      height: "1.5px",
      background: accent,
      transformOrigin: "left center",
      transform: on ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--duration-fast) var(--ease-standard), background var(--duration-fast) var(--ease-standard)"
    }
  }));
}
Object.assign(__ds_scope, { NavButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
const SOCIAL_BASE = "assets/icons/social";
const FOOTER_COLUMNS = [{
  title: "Servicios",
  value: "servicios",
  links: ["Pulverización", "Siembra", "Fertilización", "Análisis multiespectral", "Mapas de prescripción y aplicación selectiva"]
}, {
  title: "Productos",
  value: "productos",
  links: ["DJI Matrice 400", "DJI Matrice 4 Series", "DJI Matrice 4D Series + Dock 3"]
}, {
  title: "Nosotros",
  value: "nosotros",
  links: ["Sobre Evolaris"]
}];
const TONES = {
  light: {
    bg: "var(--surface-page)",
    claim: "var(--color-black-950)",
    link: "#3A3A3A",
    linkHover: "var(--color-black-950)",
    heading: "var(--color-black-950)",
    social: "var(--color-gray-600)",
    rule: "var(--border-default)",
    accent: "var(--color-primary)",
    press: "var(--color-primary-active)"
  },
  dark: {
    bg: "var(--color-black-950)",
    claim: "var(--color-white-50)",
    link: "var(--color-gray-400)",
    linkHover: "var(--color-white-50)",
    heading: "var(--color-white-50)",
    social: "var(--color-gray-400)",
    rule: "var(--color-gray-800)",
    accent: "var(--color-primary)",
    press: "var(--color-primary-hover)"
  }
};
function FooterLink({
  children,
  href,
  onClick,
  tone = TONES.light
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href || "#",
    target: href ? "_blank" : undefined,
    rel: href ? "noreferrer" : undefined,
    onClick: href ? undefined : e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "15px",
      letterSpacing: "var(--tracking-tight)",
      color: pressed ? tone.press : hover ? tone.linkHover : tone.link,
      textDecoration: hover && !pressed ? "underline" : "none",
      textUnderlineOffset: "3px",
      transition: "color var(--duration-fast) var(--ease-standard)",
      width: "fit-content"
    }
  }, children);
}
function FooterHeading({
  children,
  onClick,
  tone = TONES.light
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "15px",
      letterSpacing: "var(--tracking-tight)",
      color: pressed ? tone.press : hover ? tone.accent : tone.heading,
      textDecoration: hover && !pressed ? "underline" : "none",
      textUnderlineOffset: "3px",
      marginBottom: "8px",
      width: "fit-content",
      transition: "color var(--duration-fast) var(--ease-standard)"
    }
  }, children);
}
function SocialButton({
  network,
  href,
  base,
  src,
  tone = TONES.light
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const mask = `url("${src || `${base}/${network}.svg`}") center/contain no-repeat`;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": network,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      WebkitMask: mask,
      mask: mask,
      background: pressed ? tone.press : hover ? tone.accent : tone.social,
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }));
}
function SiteFooter({
  logoSrc,
  claim = "Transformamos el presente,",
  claimLine2 = "proyectamos al",
  claimAccent = "futuro.",
  location = "Neuquén, Neuquén, Argentina.",
  locationHref,
  columns = FOOTER_COLUMNS,
  instagram = "https://instagram.com",
  facebook = "https://facebook.com",
  whatsapp = "https://wa.me/",
  socialBase = SOCIAL_BASE,
  socialSrcs,
  tone = "light",
  cta = "Contactanos",
  home = "home",
  onNavigate,
  onCta
}) {
  const t = TONES[tone] || TONES.light;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: t.bg,
      padding: "88px var(--footer-pad-x, 64px) 96px"
    }
  }, claim || claimAccent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "32px",
      paddingBottom: "48px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-h2",
    style: {
      margin: 0,
      fontSize: "var(--footer-claim, 56px)",
      color: t.claim
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, claim), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block"
    }
  }, claimLine2, claimAccent ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, claimAccent)) : null)), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta
  }, cta) : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "var(--cols-footer, 1.2fr 1fr 1fr 1fr)",
      gap: "48px",
      paddingTop: "56px",
      borderTop: `1px solid ${t.rule}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(home);
    },
    style: {
      display: "inline-flex"
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Evolaris",
    style: {
      height: 26,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "24px",
      letterSpacing: "var(--tracking-tight)",
      color: t.claim
    }
  }, "EVOLARIS")), /*#__PURE__*/React.createElement(FooterLink, {
    tone: t,
    href: locationHref || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
  }, location), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(SocialButton, {
    tone: t,
    network: "instagram",
    href: instagram,
    base: socialBase,
    src: socialSrcs && socialSrcs.instagram
  }), /*#__PURE__*/React.createElement(SocialButton, {
    tone: t,
    network: "facebook",
    href: facebook,
    base: socialBase,
    src: socialSrcs && socialSrcs.facebook
  }), /*#__PURE__*/React.createElement(SocialButton, {
    tone: t,
    network: "whatsapp",
    href: whatsapp,
    base: socialBase,
    src: socialSrcs && socialSrcs.whatsapp
  }))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(FooterHeading, {
    tone: t,
    onClick: () => onNavigate && onNavigate(col.value)
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l,
    tone: t,
    onClick: () => onNavigate && onNavigate(col.value, l)
  }, l))))));
}
Object.assign(__ds_scope, { FOOTER_COLUMNS, SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  logoSrc,
  home = "home",
  links = [{
    value: "inicio",
    label: "Inicio"
  }, {
    value: "servicios",
    label: "Servicios"
  }, {
    value: "productos",
    label: "Productos"
  }, {
    value: "nosotros",
    label: "Nosotros"
  }],
  active,
  cta = "Contactar",
  sticky = true,
  onNavigate,
  onCta
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!sticky) return;
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sticky]);
  const goTo = v => {
    setOpen(false);
    onNavigate && onNavigate(v);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      padding: "20px var(--pad-x, 32px)",
      background: "var(--surface-search)",
      position: sticky ? "sticky" : "static",
      top: 0,
      zIndex: 50,
      boxShadow: scrolled ? "0 1px 3px rgba(13,13,13,0.06)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      goTo(home);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      textDecoration: "none",
      flexShrink: 0
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Evolaris",
    style: {
      height: 30,
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--color-black-950)"
    }
  }, "EVOLARIS")), /*#__PURE__*/React.createElement("nav", {
    className: "ds-nav-desktop",
    style: {
      alignItems: "center",
      gap: "40px"
    }
  }, links.map(it => /*#__PURE__*/React.createElement(__ds_scope.NavButton, {
    key: it.value,
    active: active === it.value,
    onClick: () => goTo(it.value)
  }, it.label)), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onCta
  }, cta) : null), /*#__PURE__*/React.createElement("button", {
    className: "ds-nav-burger",
    "aria-label": open ? "Cerrar menú" : "Abrir menú",
    onClick: () => setOpen(o => !o),
    style: {
      background: "none",
      border: "none",
      padding: 8,
      margin: -8,
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-black-950)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "28px"
    }
  }, open ? "close" : "menu")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      top: 70,
      background: "var(--surface-search)",
      zIndex: 49,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "8px",
      padding: "32px 24px 48px"
    }
  }, links.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    onClick: () => goTo(it.value),
    style: {
      background: "none",
      border: "none",
      padding: "14px 0",
      cursor: "pointer",
      fontFamily: "var(--font-display)",
      fontSize: "30px",
      letterSpacing: "var(--tracking-tight)",
      color: active === it.value ? "var(--color-primary)" : "var(--color-black-950)"
    }
  }, it.label)), cta ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: () => {
      setOpen(false);
      onCta && onCta();
    }
  }, cta)) : null) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  const wrap = React.useRef(null);
  const [bar, setBar] = React.useState(null);
  React.useEffect(() => {
    const el = wrap.current && wrap.current.querySelector(`[data-tab="${value}"]`);
    if (!el) {
      setBar(null);
      return;
    }
    setBar({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [value, tabs.length]);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    style: {
      position: "relative",
      display: "flex",
      gap: "24px",
      borderBottom: "1px solid var(--border-default)"
    }
  }, tabs.map(t => {
    const active = t.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      "data-tab": t.value,
      onClick: () => onChange && onChange(t.value),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "10px 2px 14px",
        fontFamily: "var(--font-display)",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "var(--tracking-tight)",
        textTransform: "none",
        color: active ? "var(--color-black-950)" : "var(--color-gray-500)",
        borderBottom: "2px solid transparent",
        marginBottom: "-1px",
        transition: "color var(--duration-base) var(--ease-standard)"
      }
    }, t.label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "-1px",
      height: "2px",
      background: "var(--color-primary)",
      left: bar ? bar.left : 0,
      width: bar ? bar.width : 0,
      opacity: bar ? 1 : 0,
      transition: "left var(--duration-base) var(--ease-emphasized), width var(--duration-base) var(--ease-emphasized)"
    }
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(13,13,13,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-elevated)",
      padding: "32px",
      width: "420px",
      maxWidth: "90vw",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-h4",
    style: {
      fontSize: "22px"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "mi",
    onClick: onClose,
    style: {
      cursor: "pointer",
      color: "var(--color-gray-500)",
      fontSize: "20px"
    }
  }, "close")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--color-gray-700)",
      lineHeight: 1.5
    }
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "12px",
      marginTop: "24px"
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/search/FilterTag.jsx
try { (() => {
const SECTORS = {
  agronomia: {
    label: "Agricultura",
    border: "var(--color-sector-agronomia)",
    text: "var(--color-sector-agronomia-text)",
    tint: "var(--color-sector-agronomia-tint)"
  },
  oilgas: {
    label: "Oil & Gas",
    border: "var(--color-sector-oilgas)",
    text: "var(--color-sector-oilgas-text)",
    tint: "var(--color-sector-oilgas-tint)"
  },
  mineria: {
    label: "Minería",
    border: "var(--color-sector-mineria)",
    text: "var(--color-sector-mineria-text)",
    tint: "var(--color-sector-mineria-tint)"
  },
  construccion: {
    label: "Construcción",
    border: "var(--color-sector-construccion)",
    text: "var(--color-sector-construccion-text)",
    tint: "var(--color-sector-construccion-tint)"
  },
  otros: {
    label: "Otros",
    border: "var(--color-sector-otros)",
    text: "var(--color-sector-otros-text)",
    tint: "var(--color-sector-otros-tint)"
  }
};
SECTORS.agricultura = SECTORS.agronomia;
function FilterTag({
  sector = "agronomia",
  children,
  selected = false,
  size = "md",
  onClick,
  onRemove,
  disabled = false
}) {
  const [hover, setHover] = React.useState(false);
  const s = SECTORS[sector] || SECTORS.agronomia;
  const pad = size === "sm" ? selected ? "4px 10px 4px 12px" : "4px 12px" : "7px 14px";
  const fs = size === "sm" ? "11px" : "13px";
  return /*#__PURE__*/React.createElement("span", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size === "sm" ? "5px" : "7px",
      padding: pad,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${s.border}`,
      background: s.tint,
      color: s.text,
      fontFamily: "var(--font-display)",
      fontSize: fs,
      fontWeight: 500,
      letterSpacing: "var(--tracking-tight)",
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : onClick || onRemove ? "pointer" : "default",
      opacity: disabled ? "var(--opacity-disabled)" : hover && !disabled && (onClick || onRemove) ? 0.82 : 1,
      transition: "opacity var(--duration-fast) var(--ease-standard)"
    }
  }, children || s.label, selected ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      fontSize: size === "sm" ? "13px" : "15px"
    }
  }, "close") : null);
}
Object.assign(__ds_scope, { SECTORS, FilterTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/FilterTag.jsx", error: String((e && e.message) || e) }); }

// components/search/SearchBar.jsx
try { (() => {
const FIELD = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  background: "var(--surface-search)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-sm)",
  padding: "16px 22px",
  width: "100%"
};
function Highlight({
  text,
  query
}) {
  const i = query ? text.toLowerCase().indexOf(query.toLowerCase()) : -1;
  if (!query || i !== 0) return /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, text);
  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-gray-700)",
      fontWeight: 400
    }
  }, text.slice(0, query.length)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-black-950)",
      fontWeight: 600
    }
  }, text.slice(query.length)));
}
function SearchBar({
  placeholder = "Buscar",
  value: valueProp,
  onChange,
  results = [],
  sectors = ["agronomia", "oilgas", "mineria", "construccion"],
  selectedSectors: selProp,
  onSectorsChange,
  onSelect,
  open: openProp
}) {
  const [valueState, setValueState] = React.useState("");
  const [selState, setSelState] = React.useState([]);
  const [focused, setFocused] = React.useState(false);
  const value = valueProp !== undefined ? valueProp : valueState;
  const selected = selProp !== undefined ? selProp : selState;
  const setValue = v => {
    if (valueProp === undefined) setValueState(v);
    onChange && onChange(v);
  };
  const setSel = v => {
    if (selProp === undefined) setSelState(v);
    onSectorsChange && onSectorsChange(v);
  };
  const open = openProp !== undefined ? openProp : focused && (value.length > 0 || selected.length > 0);
  const norm = f => typeof f === "string" ? {
    value: f,
    label: undefined,
    sector: f
  } : {
    value: f.value,
    label: f.label,
    sector: f.sector || "otros"
  };
  const all = sectors.map(norm);
  const byValue = v => all.find(f => f.value === v) || norm(v);
  const available = all.filter(f => !selected.includes(f.value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      fontFamily: "var(--font-display)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: FIELD
  }, selected.map(v => {
    const f = byValue(v);
    return /*#__PURE__*/React.createElement(__ds_scope.FilterTag, {
      key: v,
      sector: f.sector,
      size: "sm",
      selected: true,
      onRemove: () => setSel(selected.filter(x => x !== v))
    }, f.label);
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: selected.length ? "" : placeholder,
    onChange: e => setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => window.setTimeout(() => setFocused(false), 120),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-display)",
      fontSize: "16px",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--color-black-950)"
    }
  }), value || selected.length ? /*#__PURE__*/React.createElement("span", {
    className: "mi",
    onMouseDown: e => {
      e.preventDefault();
      setValue("");
      setSel([]);
    },
    style: {
      fontSize: "24px",
      color: "var(--color-black-950)",
      cursor: "pointer"
    }
  }, "close") : /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "24px",
      color: "var(--color-black-950)"
    }
  }, "search")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "calc(100% + 10px)",
      zIndex: 20,
      background: "var(--surface-search)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "24px",
      padding: "16px 20px 8px",
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, available.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px"
    }
  }, available.map(f => /*#__PURE__*/React.createElement(__ds_scope.FilterTag, {
    key: f.value,
    sector: f.sector,
    size: "sm",
    onClick: () => setSel([...selected, f.value])
  }, f.label))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseDown: e => {
      e.preventDefault();
      onSelect && onSelect(r);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "10px 0",
      cursor: "pointer",
      fontSize: "16px",
      letterSpacing: "var(--tracking-tight)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "24px",
      color: "var(--color-gray-500)"
    }
  }, "search"), /*#__PURE__*/React.createElement(Highlight, {
    text: typeof r === "string" ? r : r.label,
    query: value
  }))))) : null);
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/search/SearchBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/About.jsx
try { (() => {
const ABOUT_BANDS = [{
  icon: "verified",
  title: "Piloto",
  accent: "certificado",
  desc: "Contamos con piloto certificado por la Administración Nacional de Aviación Civil (ANAC)."
}, {
  icon: "flight",
  title: "En constante",
  accent: "expansión",
  desc: "Incorporamos capacidades de forma constante, ampliando nuestros servicios hacia otras industrias."
}, {
  icon: "factory",
  title: "Tecnología de",
  accent: "precisión",
  desc: "Usamos tecnología de precisión para tomar decisiones basadas en datos, y ayudarte a optimizar tu negocio."
}];
function AboutBands({
  bands
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-black-950)",
      padding: "var(--section-gap, 120px) var(--band-pad-x, 230px)",
      marginTop: "var(--section-gap, 120px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "var(--cols-3)",
      gap: "var(--band-gap, 48px)",
      alignItems: "start"
    }
  }, bands.map(band => /*#__PURE__*/React.createElement("div", {
    key: band.accent,
    style: {
      background: "var(--color-white-50)",
      borderRadius: "var(--radius-md)",
      padding: "24px",
      height: "var(--card-h, 380px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "var(--band-icon, 48px)",
      color: "var(--color-primary)",
      alignSelf: "flex-start"
    }
  }, band.icon), /*#__PURE__*/React.createElement("h3", {
    className: "text-h4",
    style: {
      margin: 0,
      color: "var(--color-black-950)"
    }
  }, band.title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, band.accent))), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: 0,
      color: "var(--color-gray-700)"
    }
  }, band.desc)))));
}
function About({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--surface-page)",
      paddingBottom: "var(--section-gap, 120px)"
    }
  }, /*#__PURE__*/React.createElement(SectionHero, {
    id: "nosotros-hero",
    title: "Sobre",
    accent: "Evolaris",
    placeholder: "Foto del equipo en campo",
    height: 300
  }), /*#__PURE__*/React.createElement(SectionIntro, null, "Con base en Neuqu\xE9n, brindamos servicios de drones para el agro y asesoramiento en la venta de equipamiento para otras industrias."), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "var(--section-gap, 120px) var(--pad-x, 48px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 9"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "nosotros-campo",
    shape: "rect",
    placeholder: "Foto de campo o vuelo"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "var(--section-gap, 120px) var(--pad-x, 48px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "var(--cols-split-narrow)",
      gap: "var(--split-gap, 56px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-h4",
    style: {
      margin: 0
    }
  }, "Por qu\xE9 comenzamos"), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: 0,
      color: "var(--color-gray-700)"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper in neque in viverra. Donec ante eros, mollis et quam vel, bibendum tristique ante. Cras fringilla bibendum posuere. Phasellus pretium volutpat nisl vitae dignissim."))), /*#__PURE__*/React.createElement(AboutBands, {
    bands: ABOUT_BANDS
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "var(--section-gap, 120px) var(--pad-x, 48px) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 9"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "nosotros-equipo",
    shape: "rect",
    placeholder: "Foto del equipo"
  }))), /*#__PURE__*/React.createElement(SectionIntro, {
    vectorFirst: true
  }, "Comencemos a trabajar juntos"));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ContactForm.jsx
try { (() => {
const CONTACT_SERVICES = [{
  value: "",
  label: "Elegí un servicio"
}, {
  value: "pulverizacion",
  label: "Pulverización"
}, {
  value: "fertilizacion",
  label: "Fertilización"
}, {
  value: "siembra",
  label: "Siembra"
}, {
  value: "multiespectral",
  label: "Análisis multiespectral"
}, {
  value: "prescripcion",
  label: "Mapas de prescripción y aplicación selectiva"
}, {
  value: "fotogrametria",
  label: "Fotogrametría"
}, {
  value: "inspecciones",
  label: "Inspecciones"
}, {
  value: "relevamientos",
  label: "Relevamientos"
}, {
  value: "vigilancia",
  label: "Vigilancia"
}, {
  value: "no-seguro",
  label: "No estoy seguro"
}];
const CONTACT_PRODUCTS = [{
  value: "",
  label: "Elegí un producto"
}, {
  value: "matrice-400",
  label: "DJI Matrice 400"
}, {
  value: "matrice-4-series",
  label: "DJI Matrice 4 Series"
}, {
  value: "matrice-4t",
  label: "DJI Matrice 4T"
}, {
  value: "matrice-4e",
  label: "DJI Matrice 4E"
}, {
  value: "matrice-4d-dock3",
  label: "DJI Matrice 4D Series + Dock 3"
}, {
  value: "no-seguro",
  label: "No estoy seguro"
}];
const CIUDADES = [{
  value: "",
  label: "Elegí tu ciudad"
}, {
  value: "cipolletti",
  label: "Cipolletti, Río Negro"
}, {
  value: "general-roca",
  label: "General Roca, Río Negro"
}, {
  value: "allen",
  label: "Allen, Río Negro"
}, {
  value: "villa-regina",
  label: "Villa Regina, Río Negro"
}, {
  value: "chichinales",
  label: "Chichinales, Río Negro"
}, {
  value: "choele-choel",
  label: "Choele Choel, Río Negro"
}, {
  value: "cervantes",
  label: "Cervantes, Río Negro"
}, {
  value: "mainque",
  label: "Mainqué, Río Negro"
}, {
  value: "catriel",
  label: "Catriel, Río Negro"
}, {
  value: "neuquen",
  label: "Neuquén Capital, Neuquén"
}, {
  value: "plottier",
  label: "Plottier, Neuquén"
}, {
  value: "centenario",
  label: "Centenario, Neuquén"
}, {
  value: "senillosa",
  label: "Senillosa, Neuquén"
}, {
  value: "anelo",
  label: "Añelo, Neuquén"
}, {
  value: "otra",
  label: "Otra localidad"
}];
const EMPTY = {
  nombre: "",
  apellido: "",
  ciudad: "",
  servicio: "",
  telefono: "",
  email: "",
  mensaje: ""
};
function ContactForm() {
  const {
    Input,
    Select,
    Button,
    Textarea,
    Tabs
  } = window.EvolarisDesignSystem_db2578;
  const [modo, setModo] = React.useState("servicios");
  const [f, setF] = React.useState(EMPTY);
  const [errors, setErrors] = React.useState({});
  const [incompleto, setIncompleto] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const cambiarModo = v => {
    if (v === modo) return;
    setModo(v);
    setF(s => ({
      ...s,
      servicio: ""
    }));
    setErrors(e => ({
      ...e,
      servicio: undefined
    }));
    setIncompleto(false);
  };
  const set = k => v => {
    setF(s => ({
      ...s,
      [k]: v
    }));
    setErrors(e => ({
      ...e,
      [k]: undefined
    }));
    setIncompleto(false);
  };
  const submit = () => {
    const e = {};
    if (!f.nombre.trim()) e.nombre = "Ingresá tu nombre";
    if (!f.apellido.trim()) e.apellido = "Ingresá tu apellido";
    if (!f.telefono.trim()) e.telefono = "Ingresá tu teléfono";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) e.email = "Revisá el correo";
    if (!f.ciudad) e.ciudad = "Elegí tu ciudad";
    if (!f.servicio) e.servicio = modo === "productos" ? "Elegí un producto" : "Elegí un servicio";
    setErrors(e);
    setIncompleto(Object.keys(e).length > 0);
    if (!Object.keys(e).length) setSent(true);
  };
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "16px",
        padding: "48px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mi",
      style: {
        fontSize: "40px",
        color: "var(--color-primary)"
      }
    }, "check_circle"), /*#__PURE__*/React.createElement("h3", {
      className: "text-h3",
      style: {
        margin: 0,
        fontSize: "var(--size-h3-mini)"
      }
    }, "Recibimos tu consulta"), /*#__PURE__*/React.createElement("p", {
      className: "text-paragraph",
      style: {
        margin: 0,
        color: "var(--color-gray-700)",
        maxWidth: 420
      }
    }, "Te contactamos en menos de 24hs al ", f.telefono, ". Si prefer\xEDs, escribinos directo por WhatsApp."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "12px"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => window.open("https://wa.me/", "_blank")
    }, "Abrir WhatsApp"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setF(EMPTY);
        setIncompleto(false);
        setSent(false);
      }
    }, "Enviar otra consulta")));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "servicios",
      label: "Servicios"
    }, {
      value: "productos",
      label: "Productos"
    }],
    value: modo,
    onChange: cambiarModo
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "var(--cols-2)",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Mar\xEDa",
    value: f.nombre,
    onChange: set("nombre"),
    error: errors.nombre
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Apellido",
    placeholder: "Sosa",
    value: f.apellido,
    onChange: set("apellido"),
    error: errors.apellido
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "+54 299 000 0000",
    type: "tel",
    icon: "call",
    value: f.telefono,
    onChange: set("telefono"),
    error: errors.telefono
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo electr\xF3nico",
    placeholder: "nombre@campo.com",
    type: "email",
    icon: "mail",
    value: f.email,
    onChange: set("email"),
    error: errors.email
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Ciudad",
    options: CIUDADES,
    value: f.ciudad,
    onChange: set("ciudad")
  }), errors.ciudad ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--color-error)"
    }
  }, errors.ciudad) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: modo === "productos" ? "Producto que desea" : "Servicio que desea",
    options: modo === "productos" ? CONTACT_PRODUCTS : CONTACT_SERVICES,
    value: f.servicio,
    onChange: set("servicio")
  }), errors.servicio ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--color-error)"
    }
  }, errors.servicio) : null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Textarea, {
    label: "Mensaje adicional (opcional)",
    placeholder: modo === "productos" ? "Contanos más sobre el producto que deseas" : "Contanos más sobre el servicio que deseas",
    maxWords: 150,
    value: f.mensaje,
    onChange: set("mensaje")
  })), incompleto ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--color-error)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mi",
    style: {
      fontSize: "18px"
    }
  }, "error_outline"), "Faltan completar campos obligatorios.") : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: submit,
    arrow: false
  }, "Enviar")));
}
window.ContactForm = ContactForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ContactForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
function Footer({
  onNavigate
}) {
  const {
    SiteFooter
  } = window.EvolarisDesignSystem_db2578;
  const R = window.R;
  return /*#__PURE__*/React.createElement(SiteFooter, {
    tone: "dark",
    logoSrc: R("logoWhite", "../../assets/logo/logo-white.svg"),
    socialBase: "../../assets/icons/social",
    socialSrcs: {
      instagram: R("socialInstagram", null),
      facebook: R("socialFacebook", null),
      whatsapp: R("socialWhatsapp", null)
    },
    whatsapp: "https://wa.me/",
    home: "inicio",
    onNavigate: (section, link) => onNavigate && onNavigate(section, link),
    onCta: () => window.open("https://wa.me/", "_blank")
  });
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Header.jsx
try { (() => {
const R = (id, fallback) => window.__resources && window.__resources[id] || fallback;
function Header({
  page,
  onNavigate
}) {
  const {
    SiteHeader
  } = window.EvolarisDesignSystem_db2578;
  return /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: R("logoColor", "../../assets/logo/logo-color.svg"),
    links: [{
      value: "inicio",
      label: "Inicio"
    }, {
      value: "servicios",
      label: "Servicios"
    }, {
      value: "productos",
      label: "Productos"
    }, {
      value: "nosotros",
      label: "Nosotros"
    }],
    active: page,
    home: "inicio",
    onNavigate: onNavigate,
    onCta: () => window.open("https://wa.me/", "_blank")
  });
}
window.Header = Header;
window.R = R;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Home.jsx
try { (() => {
const R = (id, fallback) => window.__resources && window.__resources[id] || fallback;
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(SectionHero, {
    id: "home-hero",
    title: "Servicios y venta de",
    accent: "drones",
    placeholder: "Foto de campo \u2014 full bleed",
    height: 420
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "var(--section-gap, 120px) var(--pad-x, 48px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-quote",
    style: {
      margin: 0,
      fontSize: "var(--quote-size, 24px)",
      lineHeight: 1.17,
      textAlign: "center",
      maxWidth: 720
    }
  }, "Servicios de drones y venta de equipos DJI Enterprise en Neuqu\xE9n y R\xEDo Negro"), /*#__PURE__*/React.createElement("img", {
    src: R("lineaLogo", "../../assets/brand/linea-logo.svg"),
    alt: "",
    style: {
      display: "block",
      width: 60,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-black-950)",
      padding: "var(--section-gap, 120px) var(--pad-x, 48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "var(--cols-split-narrow)",
      gap: "var(--split-gap, 56px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-h3",
    style: {
      margin: 0,
      fontSize: "var(--size-h3-compact)",
      color: "var(--color-white-50)"
    }
  }, "Trabajemos ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, "juntos")), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: 0,
      color: "var(--color-gray-300)",
      maxWidth: 300
    }
  }, "Dejanos tus datos y nos ponemos en contacto para asesorarte.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-white-50)",
      borderRadius: "var(--radius-md)",
      padding: "var(--form-pad, 40px) var(--form-pad, 40px) var(--form-pad-bottom, 40px)"
    }
  }, /*#__PURE__*/React.createElement(ContactForm, null)))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Products.jsx
try { (() => {
const R = (id, fallback) => window.__resources && window.__resources[id] || fallback;

// Catálogo por producto: reemplazar por el PDF real cuando esté disponible.
const CATALOGO_PDF = "#";
const PRODUCT_FILTERS = [{
  value: "mapeo",
  label: "Mapeo"
}, {
  value: "inspecciones",
  label: "Inspecciones"
}, {
  value: "emergencias",
  label: "Emergencias"
}, {
  value: "seguridad",
  label: "Seguridad"
}, {
  value: "topografia",
  label: "Topografía"
}, {
  value: "volumetrica",
  label: "Medición volumétrica"
}, {
  value: "automatizacion",
  label: "Automatización"
}, {
  value: "monitoreo",
  label: "Monitoreo continuo"
}];
const FILTER_LABEL = Object.fromEntries(PRODUCT_FILTERS.map(f => [f.value, f.label]));
const PRODUCTS = [{
  name: "DJI Matrice 400",
  tags: ["mapeo", "inspecciones", "emergencias"],
  desc: "Plataforma pensada para las condiciones más exigentes: hasta 59 min de autonomía, 6 kg de capacidad de carga y detección avanzada de obstáculos. Compatible con sensores visibles, térmicos y LiDAR, para mapeo, inspecciones y respuesta ante emergencias."
}, {
  name: "DJI Matrice 4 Series",
  tags: ["inspecciones", "seguridad", "topografia", "volumetrica"],
  desc: "Drones compactos multisensor para el trabajo diario, con detección y medición inteligente.",
  variants: [{
    name: "Matrice 4T",
    desc: "inspecciones en electricidad, seguridad y emergencias."
  }, {
    name: "Matrice 4E",
    desc: "mapeo geoespacial, topografía y seguimiento de obras."
  }]
}, {
  name: "DJI Matrice 4D Series + Dock 3",
  tags: ["automatizacion", "monitoreo"],
  desc: "Sistema de operación remota y autónoma: programa tareas sin necesidad de presencia continua en el lugar, reduciendo tiempos y costos operativos."
}];
function ProductRow({
  product,
  index
}) {
  const {
    FilterTag,
    Button
  } = window.EvolarisDesignSystem_db2578;
  return /*#__PURE__*/React.createElement("div", {
    "data-anchor": window.slugify(product.name),
    style: {
      display: "grid",
      gridTemplateColumns: "var(--cols-split)",
      gap: "var(--split-gap, 56px)",
      alignItems: "start",
      padding: "var(--row-gap, calc(60px * var(--rhythm, 1))) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      marginTop: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px"
    }
  }, product.tags.map(t => /*#__PURE__*/React.createElement(FilterTag, {
    key: t,
    sector: "otros",
    size: "sm"
  }, FILTER_LABEL[t]))), /*#__PURE__*/React.createElement("h3", {
    className: "text-h3",
    style: {
      margin: 0
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: "12px 0 0",
      color: "var(--color-gray-700)",
      maxWidth: 340
    }
  }, product.desc), product.variants ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "4px 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, product.variants.map(v => /*#__PURE__*/React.createElement("li", {
    key: v.name,
    className: "text-paragraph",
    style: {
      fontSize: "14px",
      color: "var(--color-gray-700)",
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-h5",
    style: {
      color: "var(--color-black-950)"
    }
  }, v.name), ": ", v.desc))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download",
    onClick: () => {}
  }, "Descargar cat\xE1logo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `producto-${index}`,
    shape: "rect",
    placeholder: `Foto de ${product.name}`
  })));
}
function Products({
  onNavigate
}) {
  const {
    SearchBar
  } = window.EvolarisDesignSystem_db2578;
  const [q, setQ] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const list = PRODUCTS.filter(p => (!q || p.name.toLowerCase().includes(q.toLowerCase())) && (!tags.length || tags.some(x => p.tags.includes(x))));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(SectionHero, {
    id: "productos-hero",
    title: "Nuestros",
    accent: "productos",
    placeholder: "Foto de drone en operaci\xF3n \u2014 full bleed",
    height: 300
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-quote",
    style: {
      margin: 0,
      fontSize: "var(--quote-size, 24px)",
      lineHeight: 1.17,
      textAlign: "center",
      maxWidth: 720
    }
  }, "Somos ", /*#__PURE__*/React.createElement("img", {
    src: R("bidcomLogo", "../../assets/logo/partners/bidcom-black.png"),
    alt: "Bidcom",
    style: {
      height: "0.95em",
      width: "auto",
      display: "inline-block",
      verticalAlign: "baseline",
      position: "relative",
      top: "0.08em"
    }
  }), " partners en la regi\xF3n de Neuqu\xE9n y R\xEDo Negro.", /*#__PURE__*/React.createElement("br", null), "Asesoramos y gestionamos la compra de tu equipo."), /*#__PURE__*/React.createElement("img", {
    src: R("lineaLogo", "../../assets/brand/linea-logo.svg"),
    alt: "",
    style: {
      display: "block",
      width: 60,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) var(--section-gap, 120px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--search-max, 420px)",
      margin: "0 auto 32px"
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    placeholder: "Buscar productos",
    value: q,
    onChange: setQ,
    sectors: PRODUCT_FILTERS,
    selectedSectors: tags,
    onSectorsChange: setTags,
    results: list.map(p => p.name),
    onSelect: r => setQ(typeof r === "string" ? r : r.label)
  })), list.map(p => /*#__PURE__*/React.createElement(ProductRow, {
    key: p.name,
    product: p,
    index: PRODUCTS.indexOf(p)
  })), !list.length ? /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      textAlign: "center",
      color: "var(--color-gray-600)",
      padding: "48px 0"
    }
  }, "No encontramos productos para esa b\xFAsqueda.") : null));
}
window.Products = Products;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Products.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SectionHero.jsx
try { (() => {
function SectionHero({
  id,
  title,
  accent,
  placeholder,
  height = 300,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: `calc(${height}px * var(--hero-scale, 1))`,
      overflow: "hidden",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: id,
    shape: "rect",
    placeholder: placeholder
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--hero-veil, linear-gradient(to top, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.28) 45%, rgba(13,13,13,0) 85%))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      gap: "20px",
      padding: "var(--hero-pad, 0 40px 36px)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-h1",
    style: {
      margin: 0,
      fontSize: "var(--size-h1)",
      color: "var(--color-white-50)",
      maxWidth: "18ch",
      textWrap: "balance"
    }
  }, title, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, accent)), children)));
}
window.SectionHero = SectionHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SectionHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/SectionIntro.jsx
try { (() => {
const R = (id, fallback) => window.__resources && window.__resources[id] || fallback;
function SectionIntro({
  children,
  vectorFirst = false
}) {
  const vector = /*#__PURE__*/React.createElement("img", {
    src: R("lineaLogo", "../../assets/brand/linea-logo.svg"),
    alt: "",
    style: {
      display: "block",
      width: 60,
      height: 24
    }
  });
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px"
    }
  }, vectorFirst ? vector : null, /*#__PURE__*/React.createElement("p", {
    className: "text-quote",
    style: {
      margin: 0,
      fontSize: "var(--quote-size, 24px)",
      textAlign: "center",
      maxWidth: 720
    }
  }, children), vectorFirst ? null : vector);
}
window.SectionIntro = SectionIntro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/SectionIntro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Services.jsx
try { (() => {
// Bloque "Próximamente" desactivado a pedido del cliente (sept. 2026).
// Los servicios marcados con `soon: true` quedan guardados abajo; poner SHOW_SOON = true para volver a publicarlos.
const SHOW_SOON = false;
const SERVICES = [{
  name: "Pulverización",
  sectors: ["agronomia"],
  desc: "Aplicación de fitosanitarios, fertilizantes y herbicidas. El flujo de aire del equipo mejora la penetración en la planta y permite trabajar incluso con suelo húmedo. Apto para cultivos intensivos (fruticultura) y extensivos (alfalfa, maíz, entre otros)."
}, {
  name: "Siembra",
  sectors: ["agronomia"],
  desc: "Distribución uniforme, ideal para cultivos de cobertura, sin pisar el terreno. Apto para cultivos de alfalfa, maíz, entre otros."
}, {
  name: "Fertilización",
  sectors: ["agronomia"],
  desc: "Distribución de nutrientes líquidos y sólidos granulados, aplicando la dosis justa donde se necesita, cuidando el suelo y optimizando el uso de insumos."
}, {
  name: "Análisis multiespectral",
  sectors: ["agronomia"],
  desc: "Monitoreo de grandes áreas para identificar estado de salud del cultivo, estrés hídrico o nutricional, y presencia temprana de plagas. Obtiene datos que ayudan a decidir antes de que el problema afecte el rendimiento.",
  indices: ["Espectro visible (RGB)", "NDVI", "NDRE", "CHM", "NDWI", "GNDVI", "Índices térmicos"]
}, {
  name: "Mapas de prescripción y aplicación selectiva",
  sectors: ["agronomia"],
  desc: "Aplicación exacta de fertilizantes, semillas y agroquímicos, utilizando solo la cantidad necesaria en cada sector del lote. Ahorro económico y menor impacto ambiental."
}, {
  name: "Inspecciones",
  sectors: ["oilgas", "construccion"],
  soon: true,
  desc: "Diagnóstico visual y termográfico de infraestructura (antenas, techos, líneas eléctricas, tuberías), para detectar fallas sin detener la operación."
}, {
  name: "Relevamientos",
  sectors: ["mineria", "oilgas"],
  soon: true,
  desc: "Captura de datos georreferenciados en entornos complejos, con tecnología RTK orientada a mapeo de alta precisión."
}, {
  name: "Fotogrametría",
  sectors: ["construccion", "mineria"],
  soon: true,
  desc: "Modelado 3D y ortomosaicos a partir de fotografías aéreas, para generar planos topográficos e información geoespacial."
}, {
  name: "Seguimiento de obras",
  sectors: ["construccion"],
  soon: true,
  desc: "Registro visual periódico del avance de una obra, mediante vuelos programados de manera remota."
}, {
  name: "Impacto ambiental",
  sectors: ["mineria", "oilgas"],
  soon: true,
  desc: "Monitoreo de áreas para relevar erosión de suelo, cobertura vegetal y detección temprana de fugas y pasivos ambientales."
}, {
  name: "Vigilancia",
  sectors: ["mineria", "oilgas"],
  soon: true,
  desc: "Patrullaje aéreo y monitoreo de perímetros extensos o de difícil acceso. Automatizado las 24 horas y transmisión de video en tiempo real."
}];

// Etiquetas y filtros de sector desactivados: con un solo sector visible no aportan.
// Volver a `true` junto con SHOW_SOON para recuperarlos.
const SHOW_SECTORS = false;
const VISIBLE_SERVICES = SERVICES.filter(s => SHOW_SOON || !s.soon);
const VISIBLE_SECTORS = [...new Set(VISIBLE_SERVICES.flatMap(s => s.sectors))];
function IndicesList({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "4px",
      marginTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-label",
    style: {
      fontSize: "11px",
      color: "var(--color-gray-600)"
    }
  }, "\xCDndices"), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: 0,
      fontSize: "14px",
      lineHeight: 1.3,
      color: "var(--color-gray-700)",
      maxWidth: 340
    }
  }, items.join(" | ")));
}
function ServiceRow({
  service,
  index
}) {
  const {
    FilterTag
  } = window.EvolarisDesignSystem_db2578;
  return /*#__PURE__*/React.createElement("div", {
    "data-anchor": window.slugify(service.name),
    style: {
      display: "grid",
      gridTemplateColumns: "var(--cols-split)",
      gap: "var(--split-gap, 56px)",
      alignItems: "start",
      padding: "var(--row-gap, calc(60px * var(--rhythm, 1))) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      marginTop: "48px"
    }
  }, SHOW_SECTORS ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px"
    }
  }, service.sectors.map(s => /*#__PURE__*/React.createElement(FilterTag, {
    key: s,
    sector: s,
    size: "sm"
  }))) : null, /*#__PURE__*/React.createElement("h3", {
    className: "text-h3",
    style: {
      margin: 0
    }
  }, service.name), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: "12px 0 0",
      color: service.soon ? "var(--color-gray-800)" : "var(--color-gray-700)",
      maxWidth: 340
    }
  }, service.desc), service.indices ? /*#__PURE__*/React.createElement(IndicesList, {
    items: service.indices
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: `servicio-${index}`,
    shape: "rect",
    placeholder: `Foto de ${service.name}`
  })));
}
function Services({
  onNavigate
}) {
  const {
    SearchBar
  } = window.EvolarisDesignSystem_db2578;
  const [q, setQ] = React.useState("");
  const [sectors, setSectors] = React.useState([]);
  const list = VISIBLE_SERVICES.filter(s => (!q || s.name.toLowerCase().includes(q.toLowerCase())) && (!sectors.length || sectors.some(x => s.sectors.includes(x))));
  const now = list.filter(s => !s.soon);
  const soon = SHOW_SOON ? list.filter(s => s.soon) : [];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(SectionHero, {
    id: "servicios-hero",
    title: "Nuestros",
    accent: "servicios",
    placeholder: "Foto de campo \u2014 full bleed",
    height: 300
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "calc(var(--section-gap, 120px) * 0.84) var(--pad-x, 48px) var(--section-gap, 120px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--search-max, 420px)",
      margin: "0 auto 32px"
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    placeholder: "Buscar servicios",
    value: q,
    onChange: setQ,
    sectors: SHOW_SECTORS ? VISIBLE_SECTORS : [],
    selectedSectors: sectors,
    onSectorsChange: setSectors,
    results: list.map(s => s.name),
    onSelect: r => setQ(typeof r === "string" ? r : r.label)
  })), now.map(s => /*#__PURE__*/React.createElement(ServiceRow, {
    key: s.name,
    service: s,
    index: SERVICES.indexOf(s)
  })), soon.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "12px",
      paddingTop: "64px",
      paddingBottom: "48px",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-h3",
    style: {
      margin: 0,
      fontSize: "var(--size-h3-mini)",
      color: "var(--color-primary)"
    }
  }, "Pr\xF3ximamente"), /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      margin: 0,
      fontSize: "16px",
      color: "var(--color-gray-800)",
      maxWidth: 540,
      textAlign: "center"
    }
  }, "En constante aprendizaje, incorporando servicios para otras industrias.")), soon.map(s => /*#__PURE__*/React.createElement(ServiceRow, {
    key: s.name,
    service: s,
    index: SERVICES.indexOf(s)
  }))) : null, !list.length ? /*#__PURE__*/React.createElement("p", {
    className: "text-paragraph",
    style: {
      textAlign: "center",
      color: "var(--color-gray-600)",
      padding: "48px 0"
    }
  }, "No encontramos servicios para esa b\xFAsqueda.") : null));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/anchors.js
try { (() => {
// Anclas del sitio: convierte un label en slug y hace scroll al bloque correspondiente.
function slugify(text) {
  return String(text).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function scrollToAnchor(slug, attempt = 0) {
  if (!slug) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }
  const el = document.querySelector(`[data-anchor="${slug}"]`);
  if (!el) {
    if (attempt < 10) window.setTimeout(() => scrollToAnchor(slug, attempt + 1), 60);else window.scrollTo({
      top: 0,
      behavior: "smooth"
    }); // sin ancla: al inicio de la sección
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth"
  });
}
window.slugify = slugify;
window.scrollToAnchor = scrollToAnchor;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/anchors.js", error: String((e && e.message) || e) }); }

// ui_kits/site/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/site/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavButton = __ds_scope.NavButton;

__ds_ns.FOOTER_COLUMNS = __ds_scope.FOOTER_COLUMNS;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.SECTORS = __ds_scope.SECTORS;

__ds_ns.FilterTag = __ds_scope.FilterTag;

__ds_ns.SearchBar = __ds_scope.SearchBar;

})();
