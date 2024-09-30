import { Text, View, ImageBackground  } from 'react-native';
import {styles } from './styles';
import { Flight } from "@/components/flight"
import { Ionicons } from "@expo/vector-icons"
import { Info } from '@/components/info';

export  function Home() {
  return (
    <View style={styles.container}>
       <ImageBackground
        style={styles.header}
        source={require("@/assets/cover.png")}
      >
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>  

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU " />

              <View style={styles.duration}>
                <Ionicons name="airplane-sharp" size={32} />
                <Text style={styles.hours}>6h 0m</Text>
              </View>

              <Flight label="Nova York" value="JFK" />
          </View>

          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Evandro Oliveira</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="17 de Nov." />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>

        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Voo" value="YZ 607" />
              <Info label="Assento" value="29G" />
            </View>

            <View style={styles.inline}>
              <Info label="Terminal" value="3" />
              <Info label="Portão" value="39" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}


