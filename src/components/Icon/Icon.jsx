import PropTypes from 'prop-types';

export const ICON_TYPES = [
  'actions',
  'plus',
  'close',
  'trash',
  'angle-up',
  'angle-down',
  'pencil',
  'check',
];

// Example with HOC
// const withIcon = (Component) => {
//   return function Icon ({ className, ...props }) {
//     return (
//       <svg
//         className={className}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24">
//         <Component {...props} />
//       </svg>
//     );
//   };
// };

const IconComponent = ({ name }) => {
  switch (name) {
    default:
      return null;
    case 'actions':
      return (
        <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z" />
      );
    case 'close':
      return (
        <path
          fillRule="evenodd"
          d="M18.707 6.707a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293Z"
          clipRule="evenodd"
        />
      );
    case 'pencil':
      return (
        <path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 0 1 1.413-.575 1.92 1.92 0 0 1 1.412.575l1.4 1.4c.383.383.583.846.6 1.388a1.806 1.806 0 0 1-.55 1.387L19.3 8.925ZM4 21a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 20v-2.825a1.03 1.03 0 0 1 .3-.725l10.3-10.3 4.25 4.25-10.3 10.3a1 1 0 0 1-.725.3H4ZM14.325 9.675l-.7-.7 1.4 1.4-.7-.7Z" />
      );

    case 'plus':
      return (
        <path
          fillRule="evenodd"
          d="M13 5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5Z"
          clipRule="evenodd"
        />
      );

    case 'trash':
      return (
        <path d="M7 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 4h4c0-.283.096-.521.288-.713A.967.967 0 0 1 10 3h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 15 4h4a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 19 6v13a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 17 21H7ZM7 6v13h10V6H7Zm2 10c0 .283.096.52.288.712A.965.965 0 0 0 10 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.967.967 0 0 0-.712.287A.968.968 0 0 0 9 9v7Zm4 0c0 .283.096.52.288.712A.965.965 0 0 0 14 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.967.967 0 0 0-.712.287A.968.968 0 0 0 13 9v7Z" />
      );

    case 'angle-up':
      return (
        <path d="M6.705 14.706a.997.997 0 0 0 1.41 0L12 10.83l3.885 3.876a.997.997 0 0 0 1.41-1.411l-4.588-4.588a1 1 0 0 0-1.414 0l-4.588 4.588a.998.998 0 0 0 0 1.41Z" />
      );

    case 'angle-down':
      return (
        <path d="M6.705 8.705a.998.998 0 0 1 1.41-.001L12 12.58l3.885-3.876a.998.998 0 0 1 1.41 1.411l-4.588 4.588a1 1 0 0 1-1.414 0l-4.588-4.588a.998.998 0 0 1 0-1.41Z" />
      );
    case 'check':
      return (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z"
        />
      );
  }
};

IconComponent.propTypes = {
  name: PropTypes.oneOf(ICON_TYPES),
};

export const Icon = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <IconComponent {...props} />{' '}
    </svg>
  );
};

// Example with HOC
// export const Icon = withIcon(IconComponent);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(ICON_TYPES),
};
