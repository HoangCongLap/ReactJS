import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};
function InputField(props) {
  const { form, name, label, disabled } = props;
  // const { errors, formState } = form;
  // const hasError = formState.touched[name] && errors[name];
  // console.log(errors[name], formState[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          label={label}
          disabled={disabled}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}

export default InputField;
