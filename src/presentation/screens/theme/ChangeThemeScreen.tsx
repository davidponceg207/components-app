import { Text, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

export const ChangeThemeScreen = () => {
    return (
        <CustomView margin>
            <Title text='Change theme' safe/>

            <Button text='Light' onPress={() => {}}/>

                <View style={{margin: 10}} />

            <Button text='Dark' onPress={() => {}}/>
        </CustomView>
    )
}