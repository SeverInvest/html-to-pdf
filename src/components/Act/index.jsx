import "./style.scss";
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import FontInterRegular from '../../vendor/fonts/Inter-Regular.ttf';

export default function Act() {

  Font.register({ family: 'Inter', src: FontInterRegular });

  const data = {
    numberAct: 123,
    day: 6,
    month: "июня",
    year: 2023,
    address: "г. Тутаев, ул. Розы Люксембург, 66",
    customerNominative: "Петрова Мария Ивановна",
    customerGenitive: "Петровой Марии Ивановны",
    flatCustomer: "51",
    protocolDate: "01.12.2017 г.",
    protocolNumber: "125п",
    contractNumber: "36к",
    contractDate: "01.01.2018 г.",
    dateStart: "01.05.2023",
    dateFinish: "31.05.2023",
    totalNumber: 8250,
    totalString: "Восемь тысяч двести пятьдесят"
  }

  const dataService = [
    {
      serviceName: "Уборка территории (5 раз в неделю), а иногда даже чаще. И еще и по выходным и праздникам иногда)))",
      serviceCountOrfrequency: 1,
      serviceUnitOfMeasurement: "шт.",
      servicePrice: 8250,
      serviceTotal: 8250
    }
  ]

  const styles = StyleSheet.create({
    page: {
      marginTop: 20,
      backgroundColor: '#fff',
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    textCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: 30,
      paddingRight: 30
    },
    tableHeader: {
      display: 'flex',
      flexDirection: "row",
      marginTop: 10,
      height: 130,
      marginLeft: 30,
      marginRight: 30
    },
    tableCellOfHeader: {
      textAlign: "center",
      borderTopWidth: 1,
      borderTopStyle: "solid",
      borderTopColor: "#000",
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      borderLeftColor: "#000",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: "#000",
      paddingLeft: 10,
      paddingRight: 10
    },
    tableRow: {
      display: 'flex',
      flexDirection: "row",
      heihgt: 100,
      marginLeft: 30,
      marginRight: 30
    },
    tableCell: {
      textAlign: "center",
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      borderLeftColor: "#000",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: "#000",
      paddingLeft: 10,
      paddingRight: 10
    }
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.textCenter]}>
          <Text>
            АКТ № {data.numberAct}
          </Text>
          <Text>
            приемки оказанных услуг и (или) выполненных работ по содержанию
          </Text>
          <Text>
            и текущему ремонту общего имущества в многоквартирном доме
          </Text>
        </View>
        <View style={{ textAlign: "right", marginTop: 10, marginRight: 20 }}>
          <Text>
            «{data.day}» {data.month} {data.year} г.
          </Text>
        </View>

        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 10, marginRight: 30 }}>
          <Text>
            Собственники помещений в многоквартирном доме, расположенном по адресу: {data.address},
            именуемые в дальнейшем “Заказчик”, в лице {data.customerGenitive}, являющегося(являлющейся)
            собственником квартиры № {data.flatCustomer}, находящейся в данном многоквартирном доме,
            действующего(действующей) на основании решения общего собрания собственников
            (протокол от {data.protocolDate} №{data.protocolNumber}) с одной стороны и Акционерное общество
            "Строительно-холдинговая компания "Север-Инвест", именуемое в дальнейшем “Исполнитель”, в лице
            генерального директора Васильева Анатолия Васильевича, действующего на основании Устава, с другой стороны,
            совместно именуемые “Стороны”, составили настоящий Акт о нижеследующем:
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 10, marginRight: 30 }}>
          <Text>
            1.	Исполнителем предъявлены к приемке следующие оказанные на основании договора управления
            многоквартирным домом № {data.contractNumber} от {data.contractDate} (далее “Договор”) услуги и
            (или) выполненные работы по содержанию и текущему ремонту общего имущества в многоквартирном доме,
            расположенном по адресу: {data.address}
          </Text>
        </View>

        <View style={styles.tableHeader}>
          <View style={[styles.tableCellOfHeader, { width: 250 }]}>
            <Text>
              Наименование вида работы (услуги)
            </Text>
          </View>
          <View style={[styles.tableCellOfHeader, { width: 120 }]}>
            <Text>
              Периодичность / количественный показатель выполненной работы (оказанной услуги)
            </Text>
          </View>
          <View style={[styles.tableCellOfHeader, { width: 90 }]}>
            <Text>
              Единица измерения работы (услуги)
            </Text>
          </View>
          <View style={[styles.tableCellOfHeader, { width: 100 }]}>
            <Text>
              Стоимость / сметная стоимость выполненной работы (оказанной услуги) за единицу
            </Text>
          </View>
          <View style={[styles.tableCellOfHeader, { borderRightWidth: 1, borderRightStyle: "solid", borderRightColor: "#000", width: 100 }]}>
            <Text>
              Цена выполненной работы (оказанной услуги), в рублях
            </Text>
          </View>
        </View>

        <View style={styles.tableRow}>
          <View style={[styles.tableCell, { width: 250 }]}>
            <Text>
              {dataService[0].serviceName}
            </Text>
          </View>
          <View style={[styles.tableCell, { width: 120 }]}>
            <Text>
              {dataService[0].serviceCountOrfrequency}
            </Text>
          </View>
          <View style={[styles.tableCell, { width: 90 }]}>
            <Text>
              {dataService[0].serviceUnitOfMeasurement}
            </Text>
          </View>
          <View style={[styles.tableCell, { width: 100 }]}>
            <Text>
              {dataService[0].servicePrice}
            </Text>
          </View>
          <View style={[styles.tableCell, { borderRightWidth: 1, borderRightStyle: "solid", borderRightColor: "#000", width: 100 }]}>
            <Text>
              {dataService[0].serviceTotal}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 10, marginRight: 30 }}>
          <Text>
            2.	Всего за период с {data.dateStart} по {data.dateFinish} выполнено работ (оказано услуг)
            на общую сумму {data.totalNumber} ({data.totalString}) рублей.
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 10, marginRight: 30 }}>
          <Text>
            3.	Работы (услуги) выполнены (оказаны) полностью, в установленные сроки, с надлежащим качеством.
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 10, marginRight: 30 }}>
          <Text>
            4.	Претензий по выполнению условий Договора Стороны друг к другу не имеют.
            Настоящий Акт составлен в 2-х экземплярах, имеющих одинаковую юридическую силу, по одному для каждой из Сторон.
          </Text>
        </View>
        <View style={{ textAlign: "center", marginTop: 10 }}>
          <Text>
            Подписи Сторон:
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 25, marginRight: 30 }}>
          <Text>
            Исполнитель: генеральный директор Васильев А. В. __________________________
          </Text>
        </View>
        <View style={{ marginLeft: 30, textAlign: "left", marginTop: 25, marginRight: 30 }}>
          <Text>
          Заказчик: {data.customerNominative} __________________________
          </Text>
        </View>

      </Page>
    </Document>
  );
}