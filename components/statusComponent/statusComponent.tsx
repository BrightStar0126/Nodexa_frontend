export const statusComponent = (status: string) => {
    return (
      <div>
        {status == "Active" ? (
          <>
            <div className="status-active-grad">
              <div className="status-active"></div>
            </div>
          </>
        ) : status == "Syncing" ? (
          <div className="status-syncing-grad">
            <div className="status-syncing"></div>
          </div>
        ) : (
          <div className="status-offline-grad">
            <div className="status-offline"></div>
          </div>
        )}
      </div>
    );
  };