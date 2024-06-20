import { SVGAttributes } from 'react';
import { TIconNames } from './IconNames';
import logo from './logo';

type TIcon = SVGAttributes<SVGElement>;

const icons: {
  [key in TIconNames]: (prop: TIcon) => JSX.Element;
} = {
  cancel: ({ color, height, width, stroke, strokeWidth }) => (
    <svg
      viewBox="0 0 24 24"
      height={height || 24}
      width={width || 24}
      fill={color || 'none'}
      stroke={stroke || 'currentColor'}
      strokeWidth={strokeWidth || 1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  ),
  filter: ({
    strokeWidth = 2,
    stroke = 'currentColor',
    height = 24,
    width = 24,
  }) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  ),
  search: ({ fill = 'currentColor', height = 24, width = 24 }) => (
    <svg viewBox="0 0 24 24" height={height} width={width} fill={fill}>
      <path
        fillRule="evenodd"
        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  caretDown: ({ fill = 'currentColor', height = 24, width = 24 }) => (
    <svg viewBox="0 0 24 24" height={height} width={width} fill={fill}>
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  logo: (props) => logo(props),
  paper: ({ style = {}, stroke = 'currentColor', height = 20, width = 20 }) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
      />
    </svg>
  ),
  eye: ({
    style = {},
    strokeWidth = 1.5,
    stroke = 'currentColor',
    height = 20,
    width = 20,
  }) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  ),
  download: ({
    style = {},
    stroke = 'currentColor',
    height = 20,
    width = 20,
    strokeWidth = 1.5,
  }) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  ),
  trash: ({
    style = {},
    stroke = 'currentColor',
    height = 20,
    width = 20,
    strokeWidth = 1.5,
  }) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  ),
  upload: ({
    style = {},
    fill = 'currentColor',
    height = 20,
    width = 20,
    strokeWidth = 1.5,
  }) => (
    <svg
      fill={fill}
      viewBox="0 0 20 20"
      strokeWidth={strokeWidth}
      height={height}
      width={width}
      style={style}
    >
      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
    </svg>
  ),
  monitor: ({ width = 20, height = 20, style = {} }) => (
    <svg viewBox="0 0 24 24" width={width} height={height} style={style}>
      <path d="M17,5h4v1h-4v-1Zm0,4h4v-1h-4v1Zm0,3h4v-1h-4v1Zm0,3h4v-1h-4v1Zm-2-5c0,3.309-2.691,6-6,6s-6-2.691-6-6,2.691-6,6-6,6,2.691,6,6Zm-6,5c1.198,0,2.284-.441,3.146-1.146l-3.646-3.646V5.051c-2.52,.255-4.5,2.364-4.5,4.949,0,2.757,2.243,5,5,5Zm5-5c0-2.586-1.98-4.694-4.5-4.949v4.742l3.354,3.354c.705-.862,1.146-1.948,1.146-3.146Zm-1.5,9v3h5.5v1H6v-1h5.5v-3H0V3.5C0,2.122,1.121,1,2.5,1H21.5c1.379,0,2.5,1.122,2.5,2.5v15.5H12.5Zm-11.5-1H23V3.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5,.673-1.5,1.5v14.5Z" />
    </svg>
  ),
  speaker: ({
    stroke = 'currentColor',
    strokeWidth = 1.5,
    fill = 'none',
    width = 20,
    height = 20,
    style = {},
  }) => (
    <svg
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      width={width}
      height={height}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
    </svg>
  ),
  newspaper: ({
    fill = 'none',
    strokeWidth = 1.5,
    stroke = 'currentColor',
    width = 20,
    height = 20,
    style = {},
  }) => (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      strokeWidth={strokeWidth}
      stroke={stroke}
      width={width}
      height={height}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
      />
    </svg>
  ),
  'edit-list': ({ width = 20, height = 20, style = {} }) => (
    <svg
      viewBox="0 0 106.86 122.88"
      width={width}
      height={height}
      style={style}
    >
      <g>
        <path d="M39.62,64.58c-1.46,0-2.64-1.41-2.64-3.14c0-1.74,1.18-3.14,2.64-3.14h34.89c1.46,0,2.64,1.41,2.64,3.14 c0,1.74-1.18,3.14-2.64,3.14H39.62L39.62,64.58z M46.77,116.58c1.74,0,3.15,1.41,3.15,3.15c0,1.74-1.41,3.15-3.15,3.15H7.33 c-2.02,0-3.85-0.82-5.18-2.15C0.82,119.4,0,117.57,0,115.55V7.33c0-2.02,0.82-3.85,2.15-5.18C3.48,0.82,5.31,0,7.33,0h90.02 c2.02,0,3.85,0.83,5.18,2.15c1.33,1.33,2.15,3.16,2.15,5.18v50.14c0,1.74-1.41,3.15-3.15,3.15c-1.74,0-3.15-1.41-3.15-3.15V7.33 c0-0.28-0.12-0.54-0.31-0.72c-0.19-0.19-0.44-0.31-0.72-0.31H7.33c-0.28,0-0.54,0.12-0.73,0.3C6.42,6.8,6.3,7.05,6.3,7.33v108.21 c0,0.28,0.12,0.54,0.3,0.72c0.19,0.19,0.45,0.31,0.73,0.31H46.77L46.77,116.58z M98.7,74.34c-0.51-0.49-1.1-0.72-1.78-0.71 c-0.68,0.01-1.26,0.27-1.74,0.78l-3.91,4.07l10.97,10.59l3.95-4.11c0.47-0.48,0.67-1.1,0.66-1.78c-0.01-0.67-0.25-1.28-0.73-1.74 L98.7,74.34L98.7,74.34z M78.21,114.01c-1.45,0.46-2.89,0.94-4.33,1.41c-1.45,0.48-2.89,0.97-4.33,1.45 c-3.41,1.12-5.32,1.74-5.72,1.85c-0.39,0.12-0.16-1.48,0.7-4.81l2.71-10.45l0,0l20.55-21.38l10.96,10.55L78.21,114.01L78.21,114.01 z M39.62,86.95c-1.46,0-2.65-1.43-2.65-3.19c0-1.76,1.19-3.19,2.65-3.19h17.19c1.46,0,2.65,1.43,2.65,3.19 c0,1.76-1.19,3.19-2.65,3.19H39.62L39.62,86.95z M39.62,42.26c-1.46,0-2.64-1.41-2.64-3.14c0-1.74,1.18-3.14,2.64-3.14h34.89 c1.46,0,2.64,1.41,2.64,3.14c0,1.74-1.18,3.14-2.64,3.14H39.62L39.62,42.26z M24.48,79.46c2.06,0,3.72,1.67,3.72,3.72 c0,2.06-1.67,3.72-3.72,3.72c-2.06,0-3.72-1.67-3.72-3.72C20.76,81.13,22.43,79.46,24.48,79.46L24.48,79.46z M24.48,57.44 c2.06,0,3.72,1.67,3.72,3.72c0,2.06-1.67,3.72-3.72,3.72c-2.06,0-3.72-1.67-3.72-3.72C20.76,59.11,22.43,57.44,24.48,57.44 L24.48,57.44z M24.48,35.42c2.06,0,3.72,1.67,3.72,3.72c0,2.06-1.67,3.72-3.72,3.72c-2.06,0-3.72-1.67-3.72-3.72 C20.76,37.08,22.43,35.42,24.48,35.42L24.48,35.42z" />
      </g>
    </svg>
  ),
  user: ({
    width = 20,
    height = 20,
    style = {},
    stroke = 'currentColor',
    strokeWidth = 1.5,
    fill = 'none',
  }) => (
    <svg
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      style={style}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  ),
  tutor: ({
    width = 20,
    height = 20,
    style = {},
    stroke = '#000',
    fill = '#000',
    strokeWidth = 2,
  }) => (
    <svg
      style={style}
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 318.97"
    >
      <path d="M165.11 35.37c-3.87 0-6.99-3.12-6.99-6.99s3.12-6.99 6.99-6.99h148.37V6.99c0-3.87 3.12-6.99 6.99-6.99s6.99 3.12 6.99 6.99v14.4h176.8c3.87 0 6.99 3.12 6.99 6.99s-3.12 6.99-6.99 6.99h-16.09v200.88h16.84c3.87 0 6.99 3.12 6.99 6.99s-3.12 6.99-6.99 6.99H324.7v7.1c.38.25.63.5.87.75l42.8 40.68c2.74 2.62 2.87 7.11.25 9.85-2.62 2.75-7.11 2.87-9.86.25l-33.93-32.31v35.43c0 3.87-3.12 6.99-6.99 6.99s-6.99-3.12-6.99-6.99v-36.8l-35.43 33.68c-2.75 2.62-7.24 2.62-9.86-.25-2.62-2.74-2.62-7.23.25-9.85l42.8-40.68c.62-.62 1.49-1.12 2.24-1.5v-6.35H163.06c-3.87 0-6.99-3.12-6.99-6.99s3.12-6.99 6.99-6.99h311.13V35.37H165.11zM301.7 206.69a6.4 6.4 0 0 1-6.4-6.4c0-3.53 2.87-6.39 6.4-6.39h136.37c3.53 0 6.39 2.86 6.39 6.39 0 3.54-2.86 6.4-6.39 6.4H301.7zm9.66-42.99c-3.53 0-6.39-2.86-6.39-6.39 0-3.54 2.86-6.4 6.39-6.4h126.71c3.53 0 6.39 2.86 6.39 6.4 0 3.53-2.86 6.39-6.39 6.39H311.36zm-20.78-42.99c-3.53 0-6.39-2.86-6.39-6.39s2.86-6.4 6.39-6.4h147.49c3.53 0 6.39 2.87 6.39 6.4 0 3.53-2.86 6.39-6.39 6.39H290.58zm-65.77-42.99c-3.53 0-6.39-2.86-6.39-6.39s2.86-6.4 6.39-6.4h213.26c3.53 0 6.39 2.87 6.39 6.4 0 3.53-2.86 6.39-6.39 6.39H224.81zm-4.62 84.52 48.49-50.84c2.85-3 7.59-3.11 10.58-.27 3 2.85 3.11 7.59.27 10.58l-45.68 47.9c3.75 4.54 5.53 10.65 4.34 16.88-2.12 11.09-12.83 18.36-23.91 16.24l-50.71-9.75c-5.06-.88-9.8-3.66-13.05-8.15l-16.45-22.73-.04 2.05v-1.48l-1.31 75.84 1.99 11.36H49.66l1.76-10.52-1.56-75.24v.04l-.26-12.9-.09.1c-8.7 8.71-9.07 29.47-10.04 42.08l-2.21 28.88c-.51 6.59-1.06 10.31-6.22 14.77-7.5 6.46-20.13 7.79-26.8-.38-4.31-5.26-4.52-13.66-4.08-21.33 2.22-38.37 6.73-96.12 49.7-115.12v.48c18.22-7.24 39.69-4.09 59.29-4.09 9.33 0 17.53 1.37 24.81 4.16 4.65 1.07 8.94 3.76 11.96 7.93l32.96 45.57 41.31 7.94zM91.77 3.13c23.89 0 43.25 19.36 43.25 43.25 0 23.88-19.36 43.24-43.25 43.24S48.52 70.26 48.52 46.38c0-23.89 19.36-43.25 43.25-43.25z" />
    </svg>
  ),
  classroom: ({ width = '', height = '', style = {} }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 118.27"
      width={width}
      height={height}
      style={style}
    >
      <g>
        <path d="M9.77,9.18c-1.08,0-1.95-0.87-1.95-1.95c0-1.08,0.87-1.95,1.95-1.95h51.91V1.95c0-1.08,0.87-1.95,1.95-1.95 c1.08,0,1.95,0.87,1.95,1.95v3.33h48.32c1.08,0,1.95,0.87,1.95,1.95c0,1.08-0.87,1.95-1.95,1.95h-4.49v49.8h4.7 c1.08,0,1.95,0.87,1.95,1.95c0,1.08-0.87,1.95-1.95,1.95H65.85v5.53c0.1,0.07,0.17,0.14,0.24,0.21l11.95,11.36 c0.77,0.73,0.8,1.99,0.07,2.75c-0.73,0.77-1.99,0.8-2.75,0.07l-9.48-9.02v9.89c0,1.08-0.87,1.95-1.95,1.95 c-1.08,0-1.95-0.87-1.95-1.95V73.39l-9.89,9.41c-0.77,0.73-2.02,0.73-2.75-0.07c-0.73-0.77-0.73-2.02,0.07-2.75l11.95-11.36 c0.17-0.17,0.42-0.31,0.63-0.42v-5.32H35.51c-1.08,0-1.95-0.87-1.95-1.95c0-1.08,0.87-1.95,1.95-1.95h69.99V9.18H9.77L9.77,9.18z M77.17,105.82c-8.69,0-2.97,0.68-1.78-8.76c1.77-14.12,15.19-14.12,17.17,0c1.27,9.08,6.72,8.76-1.78,8.76h-3.39 c-0.01,2.31-0.37,3.49,2.03,4.79c1.22,0.66,3.5,1.16,5.45,1.92c2.97-2.54,8.24-0.87,8.79-5.52c0.08-0.71-1.59-3.41-1.97-4.71 c-0.82-1.31-1.11-3.38-0.22-4.77c0.36-0.55,0.2-2.55,0.2-3.31c0-7.52,13.18-7.52,13.18,0c0,0.95-0.22,2.7,0.3,3.45 c0.86,1.25,0.42,3.47-0.31,4.63c-0.47,1.36-2.24,3.94-2.09,4.71c1.28,6.51,10.15-0.46,10.15,11.25l-24.91,0l-0.01,0h-4.03h-1.08 l-22.94,0l-0.01,0l-22.03,0v0l-27.8,0c0-11.91,11.24-5.31,12.1-12.61c0.09-0.8-1.78-3.82-2.21-5.28c-0.92-1.47-1.25-3.79-0.24-5.34 c0.4-0.62,0.23-2.86,0.23-3.71c0-8.43,14.77-8.43,14.77,0c0,1.07-0.25,3.03,0.33,3.86c0.97,1.4,0.47,3.89-0.35,5.19 c-0.52,1.53-2.51,4.41-2.34,5.28c0.62,3.15,8.47,5.29,11.21,6.45c1.54-0.79,2.79-1.73,2.92-2.82c0.07-0.57-1.27-2.72-1.57-3.76 c-0.65-1.04-0.89-2.7-0.17-3.81c0.28-0.44,0.16-2.04,0.16-2.64c0-6,10.52-6.01,10.52,0c0,0.76-0.17,2.15,0.24,2.75 c0.69,1,0.33,2.77-0.25,3.69c-0.37,1.09-1.79,3.14-1.67,3.76c0.77,3.94,5.03,1.7,7.04,4.45c1.9-1.5,5.68-1.91,7.99-3.29 c2.11-1.26,1.75-2.53,1.74-4.63L77.17,105.82L77.17,105.82L77.17,105.82z M0.01,46.73c-0.28-5.43,4.18-6.86,10.24-6.48l7.66,8.53 l7.49-8.43l18.57-0.1c7,0.8,5.54,8.15,0,8.43H31.82l-2.86,17.17L26.8,77.02c-0.56,1.85-1.67,3.03-3.31,3.66l-10.56,0.07 c-2.13-0.31-3.38-1.57-3.76-3.76l-1.64-9.25c-4.32,0.42-5.78-2.65-6.24-7.07L0.05,46.7L0.01,46.73L0.01,46.73z M17.47,17.02 c5.19,0,9.41,4.22,9.41,9.41s-4.22,9.41-9.41,9.41c-5.19,0-9.41-4.22-9.41-9.41S12.27,17.02,17.47,17.02L17.47,17.02z M17.81,44.78 l-5.96-6.55l1.74-1.39c2.58,1.08,5.16,1.08,7.7,0l2.4,1.43L17.81,44.78L17.81,44.78z" />
      </g>
    </svg>
  ),
  books: ({ width = '', height = '', style = {} }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      style={style}
    >
      <path
        fillRule="evenodd"
        d="M123.196 469.731V58.056H8v411.675h115.196zM39.559 94.859h52.078a8 8 0 0 1 8 8v222.458a8 8 0 0 1-8 8H39.559a8 8 0 0 1-8-8V102.859a8 8 0 0 1 8-8zm26.039 257.937c21.606 0 39.124 17.518 39.124 39.125 0 21.606-17.518 39.124-39.124 39.124s-39.125-17.518-39.125-39.124c.001-21.606 17.519-39.125 39.125-39.125zM181.141 94.859h52.078a8 8 0 0 1 8 8v222.458a8 8 0 0 1-8 8h-52.078a8 8 0 0 1-8-8V102.859a8 8 0 0 1 8-8zm-31.56-36.803v411.675h115.197V58.056H149.581zm57.599 294.74c21.606 0 39.125 17.518 39.125 39.125 0 21.606-17.519 39.124-39.125 39.124s-39.124-17.518-39.124-39.124c-.001-21.606 17.518-39.125 39.124-39.125zm130.864-239.955 53.441 199.443 34.869-9.343-53.441-199.443-34.869 9.343zM376.5 85.994a7.99 7.99 0 0 1 9.781 5.656l57.577 214.878a7.99 7.99 0 0 1-5.656 9.781l-50.304 13.479a7.99 7.99 0 0 1-9.781-5.656L320.54 109.254a7.99 7.99 0 0 1 5.656-9.781L376.5 85.994zm20.951-43.725L504 439.916l-111.271 29.815L286.18 72.084l111.271-29.815zm20.656 299.613c-20.83 5.581-33.249 27.06-27.664 47.901 5.58 20.825 27.061 33.249 47.901 27.664 20.831-5.582 33.249-27.058 27.665-47.901-5.58-20.824-27.062-33.248-47.902-27.664zm4.125 15.437c-12.365 3.313-19.667 15.966-16.352 28.339 3.315 12.374 15.973 19.665 28.338 16.352 12.365-3.313 19.667-15.965 16.352-28.338-3.314-12.374-15.973-19.666-28.338-16.353zm-197.013-40.002V110.859h-36.078v206.458h36.078zm-18.039 51.479c12.773 0 23.125 10.352 23.125 23.125s-10.352 23.124-23.125 23.124c-12.772 0-23.124-10.352-23.124-23.124-.001-12.773 10.351-23.125 23.124-23.125zM83.637 317.317H47.559V110.859h36.078v206.458zm-18.039 51.479c12.773 0 23.124 10.352 23.124 23.125s-10.352 23.124-23.124 23.124c-12.773 0-23.125-10.352-23.125-23.124 0-12.773 10.352-23.125 23.125-23.125z"
        clipRule="evenodd"
      />
    </svg>
  ),
  photo: ({
    width = '',
    height = '',
    style = {},
    stroke = 'currentColor',
    strokeWidth = 1.5,
    fill = 'none',
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  ),
  profile: ({
    fill = 'none',
    strokeWidth = 1.5,
    stroke = 'currentColor',
    height = '',
    width = '',
    style = {},
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      width={width}
      height={height}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
      />
    </svg>
  ),
  setting: ({ style = {}, width = '', height = '' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.881 122.88"
      width={width}
      height={height}
      style={style}
    >
      <g>
        <path d="M97.977,18.705c-0.33-0.33-0.67-0.568-1.02-0.716c-0.328-0.139-0.711-0.207-1.15-0.207c-0.441,0-0.832,0.07-1.164,0.211 c-0.344,0.145-0.676,0.379-0.994,0.702l-0.021,0.021l-6.207,6.188c-0.93,0.925-2.367,1.028-3.41,0.313 c-0.73-0.472-1.508-0.927-2.324-1.368c-0.865-0.468-1.713-0.888-2.541-1.268c-0.863-0.394-1.744-0.765-2.641-1.113 c-0.813-0.316-1.719-0.638-2.707-0.964c-1.131-0.373-1.85-1.425-1.85-2.556l0,0V8.43c0-0.456-0.072-0.859-0.215-1.21 c-0.143-0.347-0.361-0.67-0.662-0.97c-0.293-0.293-0.611-0.51-0.959-0.651c-0.35-0.143-0.754-0.214-1.211-0.214H56.956 c-0.423,0-0.798,0.068-1.126,0.204c-0.348,0.143-0.689,0.377-1.026,0.703L54.8,6.295c-0.296,0.296-0.514,0.611-0.654,0.946 C54.002,7.584,53.93,7.98,53.93,8.43v8.714c0,1.325-0.957,2.426-2.217,2.651c-0.957,0.228-1.841,0.464-2.646,0.711 c-0.882,0.27-1.769,0.577-2.658,0.924c-0.044,0.017-0.088,0.033-0.132,0.047c-0.777,0.302-1.596,0.652-2.456,1.049 c-0.874,0.403-1.688,0.812-2.442,1.223c-1.063,0.579-2.345,0.364-3.165-0.443l-0.001,0.001l-6.874-6.775 c-0.021-0.021-0.042-0.042-0.063-0.063l0,0.001c-0.293-0.31-0.601-0.537-0.924-0.678c-0.31-0.135-0.677-0.204-1.105-0.204 c-0.425,0-0.805,0.072-1.139,0.215c-0.366,0.156-0.716,0.4-1.052,0.729l-0.002,0.002l-8.339,8.358l-0.005,0.006l0.005,0.005 c-0.342,0.342-0.584,0.682-0.727,1.02c-0.139,0.328-0.208,0.711-0.208,1.149c0,0.442,0.07,0.832,0.211,1.166 c0.145,0.343,0.378,0.675,0.702,0.993l0.021,0.021l6.188,6.208c0.925,0.93,1.028,2.367,0.313,3.41 c-0.472,0.731-0.927,1.508-1.367,2.324c-0.468,0.866-0.888,1.712-1.268,2.542c-0.395,0.862-0.766,1.744-1.115,2.641 c-0.316,0.812-0.637,1.718-0.963,2.706c-0.373,1.132-1.426,1.85-2.556,1.85v0.001H8.431c-0.458,0-0.86,0.071-1.211,0.213 c-0.346,0.142-0.666,0.358-0.958,0.651L6.251,51.81l0,0c-0.293,0.293-0.51,0.612-0.652,0.958c-0.143,0.351-0.213,0.754-0.213,1.211 v11.946c0,0.422,0.067,0.798,0.203,1.125c0.144,0.348,0.378,0.689,0.704,1.027l0.003,0.002c0.295,0.296,0.611,0.515,0.945,0.654 c0.344,0.144,0.74,0.216,1.19,0.216h8.713c1.325,0,2.426,0.957,2.651,2.218c0.228,0.956,0.464,1.841,0.711,2.646 c0.271,0.882,0.577,1.768,0.924,2.657c0.326,0.847,0.696,1.727,1.108,2.639c0.421,0.933,0.833,1.783,1.233,2.552 c0.557,1.066,0.326,2.336-0.486,3.143l0.002,0.002l-6.776,6.756l-0.043,0.042h0.001c-0.31,0.294-0.537,0.602-0.677,0.924 c-0.136,0.31-0.204,0.678-0.204,1.106c0,0.425,0.072,0.804,0.214,1.138c0.156,0.366,0.4,0.717,0.73,1.052l8.309,8.405 c0.325,0.301,0.664,0.521,1.019,0.66c0.356,0.141,0.76,0.21,1.212,0.21c0.456,0,0.867-0.071,1.229-0.214 c0.348-0.137,0.675-0.347,0.978-0.631l6.159-6.257c0.929-0.944,2.384-1.057,3.438-0.329c0.729,0.47,1.504,0.923,2.318,1.362 c0.866,0.469,1.712,0.889,2.542,1.268c0.862,0.396,1.744,0.767,2.641,1.115c0.812,0.315,1.717,0.637,2.706,0.963 c1.132,0.373,1.85,1.426,1.85,2.556h0.001v9.518c0,0.456,0.071,0.859,0.214,1.21c0.142,0.347,0.358,0.666,0.651,0.959l0.005,0.006 l0.005-0.006c0.587,0.587,1.307,0.876,2.169,0.876h11.944c0.424,0,0.799-0.067,1.127-0.203c0.348-0.144,0.689-0.378,1.025-0.704 l0.004-0.003c0.295-0.296,0.514-0.611,0.654-0.945c0.145-0.344,0.217-0.739,0.217-1.189v-8.715c0-1.324,0.955-2.426,2.217-2.65 c0.955-0.228,1.84-0.465,2.646-0.711c0.881-0.271,1.768-0.577,2.656-0.923c0.848-0.327,1.729-0.697,2.643-1.109 c0.93-0.421,1.781-0.832,2.547-1.232c1.068-0.557,2.338-0.325,3.145,0.486l0.002-0.002l6.756,6.775l0.041,0.043v-0.001 c0.297,0.312,0.605,0.538,0.926,0.678c0.314,0.135,0.693,0.204,1.145,0.204c0.443,0,0.828-0.072,1.16-0.215 c0.334-0.145,0.645-0.368,0.928-0.667c0.031-0.034,0.064-0.067,0.1-0.1l8.369-8.272c0.299-0.324,0.52-0.664,0.658-1.019 c0.141-0.356,0.211-0.761,0.211-1.213c0-0.456-0.07-0.867-0.213-1.229c-0.139-0.348-0.348-0.674-0.633-0.977l-6.256-6.16 c-0.945-0.929-1.057-2.383-0.33-3.438c0.471-0.729,0.924-1.504,1.363-2.317c0.469-0.865,0.889-1.712,1.268-2.542 c0.395-0.862,0.766-1.744,1.115-2.641c0.314-0.812,0.637-1.718,0.963-2.707c0.373-1.132,1.426-1.85,2.557-1.85v-0.001h9.516 c0.457,0,0.861-0.071,1.211-0.214c0.346-0.142,0.666-0.358,0.959-0.65l0.01-0.011l0,0c0.293-0.294,0.512-0.613,0.652-0.96 c0.143-0.35,0.213-0.753,0.213-1.21V56.955c0-0.422-0.066-0.798-0.203-1.126c-0.143-0.347-0.377-0.689-0.703-1.027l-0.004-0.003 c-0.295-0.296-0.611-0.514-0.945-0.654c-0.342-0.144-0.738-0.216-1.189-0.216h-8.713c-1.342,0-2.453-0.979-2.658-2.262 c-0.211-0.843-0.449-1.698-0.719-2.566c-0.26-0.833-0.564-1.714-0.92-2.645c-0.018-0.045-0.033-0.091-0.047-0.137 c-0.338-0.885-0.684-1.717-1.039-2.496c-0.385-0.843-0.793-1.658-1.225-2.446c-0.578-1.063-0.363-2.345,0.443-3.165v-0.001 l6.775-6.874c0.021-0.021,0.041-0.042,0.063-0.063v0c0.311-0.293,0.537-0.601,0.678-0.923c0.135-0.31,0.205-0.677,0.205-1.105 c0-0.425-0.072-0.805-0.215-1.139c-0.156-0.366-0.4-0.716-0.73-1.052l-0.002-0.002l-8.359-8.339L97.977,18.705L97.977,18.705 L97.977,18.705z M99.039,13.044c1.002,0.423,1.912,1.042,2.732,1.862l0.002,0.001l8.381,8.362l0.021,0.021 c0.807,0.82,1.424,1.723,1.846,2.713c0.436,1.021,0.656,2.102,0.656,3.243c0,1.158-0.225,2.24-0.668,3.251 c-0.432,0.992-1.063,1.874-1.879,2.653l-5.367,5.445c0.158,0.329,0.316,0.662,0.469,0.999c0.43,0.938,0.824,1.878,1.182,2.819 c0.02,0.042,0.037,0.085,0.053,0.129c0.357,0.937,0.699,1.933,1.025,2.981c0.105,0.338,0.207,0.678,0.305,1.021h6.652 c1.156,0,2.238,0.212,3.252,0.636c0.996,0.417,1.896,1.032,2.699,1.841l0.057,0.057c0.791,0.818,1.391,1.72,1.799,2.71 c0.418,1.007,0.625,2.062,0.625,3.167V68.9c0,1.149-0.203,2.225-0.613,3.23c-0.41,1.003-1.021,1.914-1.838,2.733l-0.004,0.003 l-0.006,0.007l-0.004,0.004c-0.82,0.817-1.73,1.43-2.736,1.84c-1.006,0.409-2.082,0.613-3.23,0.613h-7.609 c-0.133,0.358-0.271,0.728-0.42,1.106c-0.381,0.979-0.793,1.958-1.24,2.936c-0.463,1.011-0.934,1.966-1.414,2.857 c-0.158,0.292-0.32,0.583-0.486,0.874l4.75,4.676c0.035,0.033,0.068,0.066,0.104,0.102c0.779,0.824,1.365,1.739,1.76,2.739 c0.396,1.004,0.592,2.068,0.592,3.186c0,1.114-0.195,2.169-0.588,3.169c-0.393,0.997-0.973,1.908-1.744,2.734v-0.001 c-0.027,0.028-0.055,0.058-0.084,0.086l-8.43,8.333c-0.791,0.829-1.682,1.463-2.682,1.893c-1.01,0.436-2.102,0.657-3.283,0.657 c-1.156,0-2.246-0.226-3.27-0.667c-1.014-0.439-1.91-1.074-2.691-1.898l-5.344-5.358c-0.357,0.172-0.707,0.335-1.047,0.489 c-0.91,0.41-1.883,0.815-2.916,1.214c-0.971,0.378-1.984,0.727-3.035,1.049c-0.35,0.107-0.695,0.209-1.035,0.306v6.638 c0,1.155-0.213,2.238-0.637,3.251c-0.418,0.997-1.031,1.896-1.842,2.7l-0.057,0.058c-0.818,0.789-1.721,1.388-2.709,1.798 c-1.008,0.417-2.063,0.624-3.168,0.624H53.979c-2.349,0-4.333-0.81-5.977-2.454l0.005-0.005c-0.82-0.821-1.435-1.734-1.845-2.741 c-0.41-1.006-0.614-2.081-0.614-3.23v-7.609c-0.359-0.133-0.728-0.272-1.107-0.42c-0.978-0.381-1.957-0.793-2.935-1.241 c-1.011-0.462-1.966-0.934-2.858-1.415c-0.291-0.157-0.582-0.319-0.873-0.485l-4.676,4.75c-0.033,0.035-0.067,0.069-0.102,0.103 c-0.824,0.781-1.739,1.367-2.739,1.761c-1.004,0.396-2.068,0.593-3.186,0.593c-1.114,0-2.17-0.195-3.169-0.589 c-0.997-0.393-1.907-0.973-2.734-1.743l0.001-0.002c-0.029-0.026-0.058-0.054-0.085-0.083l-8.381-8.478 c-0.806-0.82-1.423-1.724-1.845-2.714c-0.435-1.022-0.656-2.102-0.656-3.242c0-1.158,0.225-2.24,0.667-3.252 c0.437-0.999,1.071-1.886,1.897-2.67l5.359-5.344c-0.172-0.357-0.336-0.707-0.49-1.05c-0.411-0.909-0.815-1.88-1.213-2.912 c-0.378-0.971-0.728-1.984-1.05-3.036c-0.107-0.351-0.209-0.695-0.306-1.035H8.431c-1.156,0-2.239-0.213-3.251-0.637 c-0.998-0.417-1.897-1.031-2.7-1.841L2.422,71.8c-0.79-0.817-1.389-1.72-1.798-2.709C0.207,68.083,0,67.028,0,65.925V53.979 c0-1.149,0.204-2.225,0.614-3.23c0.41-1.005,1.021-1.916,1.839-2.735l0.001-0.001l0.006-0.005l0.005-0.005 c0.82-0.818,1.73-1.43,2.736-1.84c1.005-0.41,2.081-0.613,3.23-0.613h7.609c0.132-0.359,0.272-0.728,0.42-1.107 c0.38-0.978,0.793-1.957,1.241-2.936c0.462-1.011,0.933-1.966,1.415-2.857c0.16-0.297,0.326-0.594,0.496-0.891l-4.681-4.696 l-0.002-0.001c-0.827-0.813-1.453-1.728-1.88-2.739c-0.437-1.032-0.653-2.118-0.653-3.249c0-1.129,0.215-2.205,0.649-3.232 c0.43-1.017,1.05-1.932,1.863-2.745l0.005,0.005l8.356-8.376l0.021-0.021c0.82-0.806,1.723-1.423,2.713-1.845 c1.022-0.435,2.102-0.657,3.243-0.657c1.157,0,2.239,0.225,3.251,0.667c0.992,0.433,1.874,1.063,2.653,1.88l5.441,5.362 c0.327-0.162,0.653-0.317,0.978-0.467c0.837-0.386,1.761-0.775,2.772-1.167c0.043-0.02,0.087-0.038,0.131-0.055 c0.971-0.378,1.985-0.728,3.037-1.05c0.35-0.107,0.695-0.209,1.035-0.306V8.43c0-1.155,0.213-2.238,0.637-3.25 c0.417-0.998,1.032-1.897,1.841-2.701l0.057-0.057c0.818-0.79,1.72-1.388,2.709-1.797C54.796,0.207,55.851,0,56.956,0H68.9 c1.148,0,2.225,0.203,3.23,0.613c1.01,0.412,1.924,1.027,2.748,1.85c0.814,0.816,1.428,1.728,1.84,2.737 c0.41,1.005,0.613,2.081,0.613,3.229v7.61c0.359,0.133,0.727,0.273,1.107,0.42c0.977,0.38,1.955,0.793,2.934,1.24 c1.012,0.462,1.967,0.934,2.857,1.416c0.299,0.161,0.596,0.326,0.893,0.496l4.695-4.681l0.002-0.001 c0.813-0.827,1.729-1.453,2.738-1.88c1.033-0.437,2.117-0.653,3.248-0.653C96.936,12.396,98.012,12.61,99.039,13.044L99.039,13.044 z M61.44,35.346c1.781,0,3.519,0.17,5.214,0.508c1.666,0.333,3.318,0.844,4.953,1.534l0.018,0.008l0.004-0.008 c1.561,0.674,3.041,1.479,4.441,2.417c1.387,0.929,2.672,1.978,3.85,3.145l0.01,0.011l0,0c1.168,1.179,2.217,2.463,3.146,3.851 c0.938,1.4,1.742,2.88,2.416,4.441c0.031,0.074,0.059,0.148,0.084,0.223c0.646,1.569,1.131,3.152,1.449,4.751 c0.34,1.696,0.508,3.433,0.508,5.213c0,1.781-0.168,3.519-0.508,5.214c-0.332,1.667-0.844,3.317-1.533,4.953l-0.008,0.018 l0.008,0.004c-0.674,1.561-1.479,3.04-2.416,4.44c-0.93,1.388-1.979,2.672-3.146,3.851l-0.01,0.011l0,0 c-1.18,1.168-2.463,2.217-3.852,3.146c-1.398,0.938-2.879,1.742-4.439,2.416c-0.074,0.031-0.148,0.06-0.225,0.084 c-1.568,0.647-3.152,1.131-4.75,1.45c-1.695,0.339-3.434,0.508-5.214,0.508c-1.781,0-3.518-0.169-5.213-0.508 c-1.667-0.333-3.318-0.845-4.954-1.534l-0.018-0.008l-0.003,0.008c-1.561-0.674-3.042-1.479-4.441-2.416 c-1.388-0.929-2.672-1.978-3.85-3.146l-0.01-0.011l0,0c-1.168-1.18-2.218-2.463-3.146-3.852c-0.937-1.399-1.742-2.88-2.415-4.439 c-0.032-0.074-0.06-0.148-0.085-0.224c-0.647-1.569-1.131-3.152-1.45-4.751c-0.338-1.695-0.508-3.433-0.508-5.214 c0-1.781,0.169-3.518,0.508-5.213c0.333-1.667,0.845-3.318,1.535-4.953l0.007-0.018l-0.007-0.003 c0.673-1.561,1.479-3.041,2.415-4.44c0.929-1.389,1.978-2.672,3.146-3.852l0.011-0.01l0,0c1.178-1.167,2.462-2.216,3.849-3.145 c1.4-0.937,2.881-1.743,4.442-2.417c0.074-0.032,0.148-0.06,0.224-0.084c1.569-0.647,3.151-1.13,4.75-1.449 C57.922,35.516,59.659,35.346,61.44,35.346L61.44,35.346z M65.602,41.134c-1.344-0.269-2.73-0.403-4.162-0.403 c-1.431,0-2.817,0.134-4.162,0.403c-1.306,0.261-2.553,0.635-3.741,1.122c-0.052,0.026-0.105,0.052-0.16,0.075 c-1.298,0.561-2.492,1.205-3.58,1.933c-1.096,0.733-2.11,1.563-3.044,2.487c-0.925,0.935-1.755,1.951-2.489,3.048 c-0.728,1.087-1.372,2.28-1.932,3.578l-0.007-0.003c-0.521,1.237-0.917,2.539-1.191,3.905c-0.268,1.344-0.402,2.73-0.402,4.161 s0.134,2.817,0.402,4.162c0.261,1.306,0.636,2.553,1.123,3.741c0.026,0.053,0.052,0.105,0.075,0.16 c0.56,1.298,1.204,2.49,1.931,3.577c0.734,1.097,1.564,2.113,2.49,3.048c0.934,0.925,1.949,1.754,3.045,2.487 c1.087,0.728,2.28,1.372,3.579,1.933l-0.003,0.007c1.238,0.521,2.539,0.918,3.905,1.19c1.344,0.269,2.731,0.402,4.162,0.402 c1.431,0,2.818-0.134,4.162-0.402c1.307-0.261,2.553-0.635,3.742-1.122c0.051-0.026,0.105-0.052,0.16-0.075 c1.297-0.561,2.49-1.205,3.578-1.933c1.096-0.733,2.111-1.563,3.045-2.487c0.926-0.935,1.756-1.95,2.49-3.047 c0.727-1.087,1.371-2.28,1.93-3.578l0.008,0.003c0.521-1.237,0.918-2.539,1.191-3.904c0.268-1.345,0.402-2.731,0.402-4.162 s-0.135-2.817-0.402-4.161c-0.262-1.307-0.635-2.553-1.123-3.742c-0.027-0.052-0.051-0.105-0.076-0.16 c-0.559-1.298-1.203-2.491-1.932-3.578c-0.732-1.097-1.563-2.113-2.488-3.047c-0.934-0.924-1.949-1.754-3.045-2.487 c-1.088-0.728-2.281-1.372-3.578-1.933l0.002-0.007C68.27,41.804,66.969,41.407,65.602,41.134L65.602,41.134z" />
      </g>
    </svg>
  ),
  exit: ({ width = '', height = '', style = {} }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 91.839 122.88"
      width={width}
      height={height}
      style={style}
    >
      <g>
        <path d="M81.75,64.617H41.365c-1.738,0-3.147-1.423-3.147-3.178c0-1.756,1.409-3.179,3.147-3.179h40.383L68.559,43.155 c-1.146-1.31-1.025-3.311,0.271-4.469c1.297-1.159,3.278-1.037,4.425,0.273l17.798,20.383c1.065,1.216,1.037,3.029-0.011,4.21 L73.254,83.92c-1.146,1.311-3.128,1.433-4.425,0.273c-1.296-1.158-1.417-3.16-0.271-4.47L81.75,64.617L81.75,64.617z M70.841,99.629c0-1.756,1.423-3.179,3.178-3.179c1.756,0,3.179,1.423,3.179,3.179v14.242c0,2.475-1.017,4.729-2.648,6.36 c-1.633,1.632-3.887,2.648-6.36,2.648H9.009c-2.475,0-4.73-1.014-6.363-2.646C1.016,118.603,0,116.352,0,113.871V9.009 c0-2.48,1.013-4.733,2.644-6.365C4.275,1.013,6.528,0,9.009,0h59.18c2.479,0,4.731,1.016,6.362,2.646 c1.633,1.633,2.646,3.889,2.646,6.363V23.25c0,1.755-1.423,3.178-3.179,3.178c-1.755,0-3.178-1.423-3.178-3.178V9.009 c0-0.722-0.301-1.385-0.785-1.869c-0.482-0.482-1.144-0.783-1.867-0.783H9.009c-0.726,0-1.389,0.3-1.87,0.782 C6.656,7.62,6.357,8.283,6.357,9.009v104.862c0,0.724,0.301,1.385,0.783,1.867c0.484,0.484,1.147,0.785,1.869,0.785h59.18 c0.72,0,1.381-0.302,1.865-0.786c0.485-0.484,0.787-1.146,0.787-1.866V99.629L70.841,99.629z" />
      </g>
    </svg>
  ),
  plus: ({
    style = {},
    stroke = 'currentColor',
    height = 20,
    width = 20,
    strokeWidth = 1.5,
  }) => (
    <svg
      stroke={stroke}
      viewBox="0 0 20 20"
      strokeWidth={strokeWidth}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  ),
  info: ({
    style = {},
    stroke = 'currentColor',
    height = 20,
    width = 20,
    strokeWidth = 1.5,
    fill = 'none',
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  ),

  spinner: ({ style = {}, fill = 'black', height = 200, width = 200 }) => (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={width}
      height={height}
      fill={fill}
      style={{
        shapeRendering: 'auto',
        display: 'block',
        ...style,
      }}
    >
      <g>
        <g transform="rotate(0 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.9166666666666666s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.8333333333333334s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.75s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.6666666666666666s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.5833333333333334s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.5s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.4166666666666667s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.3333333333333333s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.25s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.16666666666666666s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="-0.08333333333333333s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect fill={fill} height="12" width="6" ry="6" rx="3" y="24" x="47">
            <animate
              repeatCount="indefinite"
              begin="0s"
              dur="1s"
              keyTimes="0;1"
              values="1;0"
              attributeName="opacity"
            />
          </rect>
        </g>
        <g />
      </g>
    </svg>
  ),
  star: ({
    fill = '#432c81',
    height = 24,
    width = 24,
    offset = '50%',
    stopColor = '#86868658',
  }) => {
    const id = String(Math.random());
    return (
      <svg viewBox="0 0 24 24" style={{ height, width }}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset={`${offset}%`} stopColor={fill} />
            <stop offset={`${offset}%`} stopColor={stopColor} />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${id})`}
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  circledArrowRight: (args) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={20}
      height={20}
      {...args}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  caretRightSolid: (args) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      width={20}
      height={20}
      {...args}
    >
      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
  ),

  caretLeftSolid: (args) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      width={20}
      height={20}
      {...args}
    >
      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
    </svg>
  ),
};

const Icon = ({ name, ...props }: TIcon & { name: TIconNames }) =>
  icons[name]?.(props) ?? null;
export default Icon;
