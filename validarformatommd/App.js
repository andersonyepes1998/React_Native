import { StyleSheet, Text, View,  } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
//Importar la biblioteca para las validaciones.
import { useForm, Controller } from 'react-hook-form';

export default function App() {
  // Definiciones del formulario con sus respectivos estados, errores, etc.

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      age: ''
    }
  });

  const onSubmit = (data) =>{
 
    console.log(data);//Objeto

    //Desestructurar el objeto data
    const {fullName, email, phone, password,age}=data;
    console.log(fullName)
    reset();//PARA LIMPIAR LOS CAMPOS

  }


  return (
    <View style={styles.container}>
        <Controller
        control={control}
        rules={{
        //send:true,
         required: true,
         maxLength:30,
         minLength:3,
         //pattern: /^([+-]?[1-9]d*|0)$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="nombre completo"
            mode='outlined'
            left={<TextInput.Icon icon="account-box" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
      />
      {/* {errors.fullName.type == 'send' && <Text style={{color:'green'}}>Enviado...</Text>} */}

      {errors.fullName?.type == 'required' && <Text style={{color:'red'}}>El nombre completo es obligatorrio</Text>}

      {errors.fullName?.type == 'maxLength' && <Text style={{color:'red'}}>El nombre completo debe tener maxino 30 caracteres...</Text>}

      {errors.fullName?.type == 'minLength' && <Text style={{color:'red'}}>El nombre completo debe tener, al menos 2 caracteres...</Text>}

      {errors.fullName?.type == 'pattern' && <Text style={{color:'red'}}>El nombre permite solo letras...</Text>}
          
      <Button 
        style={{marginTop:20}} 
        icon="send-check" 
        mode="contained" 
        onPress={handleSubmit(onSubmit)}>
          Enviar
      </Button>


        {/* <TextInput
          label="nombre completo"
          mode="outlined"
          left={<TextInput.Icon icon="account-box" />}
        />
        <TextInput
          label="contraseña"
          mode="outlined"
          left={<TextInput.Icon icon="account-box" />}
          right={<TextInput.Icon icon="eye" />}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
