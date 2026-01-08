import { Alert, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';

import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapters';

export const AlertScreen = () => {

    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const onShowPrompt = () => {

        // Custom
        showPrompt({
            title: 'Title',
            subtitle: 'subtitle',
            buttons: [
                { text: 'Ok', onPress: () => console.log('ok') }
            ],
            placeholder: 'Placeholder'
        })

        // Native

        // Alert.prompt(
        //     'Email',
        //     'Lorem ipsum',
        //     (value: string) => console.log({value}),
        //     'secure-text',
        //     'default value',
        //     'number-pad'
        // )
    }

    return (
        <CustomView style={ globalStyles.globalMargin }> 
            <Title safe text="Alerts" />

            <Button text="Alert - 2 buttons" onPress={createTwoButtonAlert} />

            <View style={{ height: 10 }} />

            <Button text="Alert - 3 buttons" onPress={createThreeButtonAlert} />

            <View style={{ height: 10 }} />

            <Button text="Prompt - Input" onPress={onShowPrompt} />
        </CustomView>
    )
}