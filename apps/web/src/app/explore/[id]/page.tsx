import DetailEventPage from '@/features/explore/[id]';

const DetailEvent = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <DetailEventPage eventId={Number(params.id)} />
    </div>
  );
};

export default DetailEvent;
