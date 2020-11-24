import React, {
  useRef,
  useImperativeHandle,
  useEffect,
  forwardRef,
  useState,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from "@unform/core";
import { Feather } from '@expo/vector-icons'
import colors from '../../styles/colors';

import {
  Container,
  TextInput
} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  isPass?: boolean;
  type?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = ({ name, icon, isPass, ...rest }, ref) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef   =  useRef<InputValueReference>({ value: defaultValue});

  const [showPass, setShowPass]   = useState(false);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#d9d9d9"
        defaultValue={defaultValue}
        secureTextEntry={(isPass && !showPass) ? true : false }
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest }
      />
      {(isPass && !error) && (
        showPass ? (
          <Feather
            name="eye-off"
            size={20}
            onPress={() => setShowPass(false)}
            color={colors.black}
          />
        ) : (
          <Feather
            name="eye"
            size={20}
            onPress={() => setShowPass(true)}
            color={colors.black}
          />
        )
      )}
    </Container>
  );
};

export default forwardRef(Input);
