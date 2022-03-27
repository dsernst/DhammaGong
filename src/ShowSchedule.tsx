import { convertTimes as pretty } from './convertTimes'
import { getNextTimeIndex } from './getNextTimeIndex'
import { NextUpCountdown } from './NextUpCountdown'
import { baseGongSchedule, vipassanaDaySchedule } from './schedule'
import { useCurrentTimeWithoutSeconds } from './useCurrentTime'

export const ShowSchedule = ({
  isVipassanaDay,
}: {
  isVipassanaDay: boolean
}) => {
  const schedule = isVipassanaDay ? vipassanaDaySchedule : baseGongSchedule

  const nextTimeIndex = getNextTimeIndex(
    useCurrentTimeWithoutSeconds(),
    Object.keys(schedule).map(Number),
  )
  return (
    <section>
      {nextTimeIndex === -1 && (
        <div style={{ textAlign: 'center' }}>
          <p className="no-more">🛏️ &nbsp;No more gongs left today.</p>
        </div>
      )}

      <h2>{isVipassanaDay ? 'Vipassana Day ' : ''}Gong Schedule</h2>

      {Object.entries(schedule).map(
        ([time, amount], index) =>
          amount && (
            <p key={index}>
              <span style={{ width: 70 }}>{pretty(+time)}</span>
              <span style={{ opacity: 0.4, width: 23 }}>—</span>
              <span>{amount} times</span>
              {[index, index + 1].includes(nextTimeIndex) && (
                <NextUpCountdown {...{ amount, targetTime: +time }} />
              )}
            </p>
          ),
      )}

      <style jsx>{`
        section {
          padding: 0 2rem;
        }

        .no-more {
          border: 1px solid #fff3;
          display: inline-block;
          padding: 10px 15px;
          font-style: italic;

          align-self: center;
        }

        span {
          display: inline-block;
        }
      `}</style>
    </section>
  )
}
