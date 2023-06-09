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
    console.log(fullName,email)
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
            label="Nombre"
            mode='Flat'
            left={<TextInput.Icon icon="account-box" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
    />

      {errors.fullName?.type == 'required' && <Text style={{color:'red'}}>El nombre completo es obligatorrio</Text>}

      {errors.fullName?.type == 'maxLength' && <Text style={{color:'red'}}>El nombre completo debe tener maxino 30 caracteres...</Text>}

      {errors.fullName?.type == 'minLength' && <Text style={{color:'red'}}>El nombre completo debe tener, al menos 2 caracteres...</Text>}

      {errors.fullName?.type == 'pattern' && <Text style={{color:'red'}}>El nombre permite solo letras...</Text>}


      <Controller
        control={control}
        rules={{
        //send:true,
         required: true,
         maxLength:10,
         minLength:3,
         //pattern: /^([+-]?[1-9]d*|0)$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            mode='Flat'
            left={<TextInput.Icon icon="email-multiple" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{marginTop:20,color:'red'}}
          />
        )}
        name="email"
    />

      {errors.email?.type == 'required' && <Text style={{color:'red'}}>El email completo es obligatorrio</Text>}

      {errors.email?.type == 'maxLength' && <Text style={{color:'red'}}>El email completo debe tener maxino 30 caracteres...</Text>}

      {errors.email?.type == 'minLength' && <Text style={{color:'red'}}>El email completo debe tener, al menos 10 caracteres...</Text>}

      {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>El nombre permite solo letras...</Text>}



      <Controller
        control={control}
        rules={{
        //send:true,
         required: true,
         maxLength:10,
         minLength:3,
         //pattern: /^([+-]?[1-9]d*|0)$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Phone"
            mode='Flat'
            left={<TextInput.Icon icon="phone" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{marginTop:20}}
          />
        )}
        name="email"
    />

      {errors.email?.type == 'required' && <Text style={{color:'red'}}>El email completo es obligatorrio</Text>}

      {errors.email?.type == 'maxLength' && <Text style={{color:'red'}}>El email completo debe tener maxino 30 caracteres...</Text>}

      {errors.email?.type == 'minLength' && <Text style={{color:'red'}}>El email completo debe tener, al menos 10 caracteres...</Text>}

      {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>El nombre permite solo letras...</Text>}



      <Controller
        control={control}
        rules={{
        //send:true,
         required: true,
         maxLength:10,
         minLength:3,
         //pattern: /^([+-]?[1-9]d*|0)$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Age"
            mode='Flat'
            left={<TextInput.Icon icon="face-agent" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{marginTop:20}}
          />
        )}
        name="email"
    />

      {errors.email?.type == 'required' && <Text style={{color:'red'}}>El email completo es obligatorrio</Text>}

      {errors.email?.type == 'maxLength' && <Text style={{color:'red'}}>El email completo debe tener maxino 30 caracteres...</Text>}

      {errors.email?.type == 'minLength' && <Text style={{color:'red'}}>El email completo debe tener, al menos 10 caracteres...</Text>}

      {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>El nombre permite solo letras...</Text>}


      
      <Controller
        control={control}
        rules={{
        //send:true,
         required: true,
         maxLength:10,
         minLength:3,
         //pattern: /^([+-]?[1-9]d*|0)$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Phone"
            mode='Password'
            left={<TextInput.Icon icon="lock-off" />}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{marginTop:20}}
          />
        )}
        name="email"
    />

      {errors.email?.type == 'required' && <Text style={{color:'red'}}>El email completo es obligatorrio</Text>}

      {errors.email?.type == 'maxLength' && <Text style={{color:'red'}}>El email completo debe tener maxino 30 caracteres...</Text>}

      {errors.email?.type == 'minLength' && <Text style={{color:'red'}}>El email completo debe tener, al menos 10 caracteres...</Text>}

      {errors.email?.type == 'pattern' && <Text style={{color:'red'}}>El nombre permite solo letras...</Text>}


      <Button 
        style={{marginTop:20,backgroundColor:'purple'}} 
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
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
