const Notification = ({ showNotification }) => {
    return (
        <div>
            {showNotification && <p>You have new messages!</p>}
        </div>
    );
}

export default Notification;