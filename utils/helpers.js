import React from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
const FLASHCARDS_NOTIFICATION_DB = 'flashcards:notification'
function createLocalNotification() {
    // Return an object that says don't forget to study
    return {
        title: `S+T+U+D+Y = STUDY`,
        body: `👨‍🎓 Don't forget to study!`
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(FLASHCARDS_NOTIFICATION_DB).then(JSON.parse).then((data) => {
      
        if (data === null) {
            Permissions.getAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                if (status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()
                    // Create a new data
                    const tomorrow = new Date()
                    // Every day we will be receiving a notification if the user has permitted us to do do
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)
                    Notifications.scheduleLocalNotificationAsync(createLocalNotification(), {
                        time: tomorrow,
                        repeat: 'day'
                    })
                    AsyncStorage.setItem(FLASHCARDS_NOTIFICATION_DB, JSON.stringify(true))
                }
            })
        }
    })
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(FLASHCARDS_NOTIFICATION_DB).then(Notifications.cancelAllScheduledNotificationsAsync)
}