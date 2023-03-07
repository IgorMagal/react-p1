import { UserAuth } from "../services/AuthCtxProvider";

const ProfilePage = () => {
  const { user } = UserAuth();

  return (
    //m-2 p-1 mx-5 border-2 rounded-lg border-neutral-900 bg-neutral-100 shadow-xl hover:scale-105 shadow-neutral-900 hover:border-white text-neutral-800

    <div className="flex flex-col gap-4 text-white py-20 text-center items-center w-full p-4">
      <p className="text-2xl">{`ProfilePage for ${user?.displayName}`}</p>
      <p className="text-md">{user?.email}</p>
      <img
        className="w-40 h-40 rounded-full border-2 border-neutral-50 shadow-lg shadow-black"
        src={user?.photoURL ? user.photoURL : undefined}
        alt={user?.displayName!}
      />
      <div className="m-2 p-1 mx-5 border-2 rounded-lg border-neutral-300 bg-neutral-100  text-neutral-800">
        <h2 className="text-2xl text-left px-4 py-1">Bio:</h2>
        <p className="text-justify p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          euismod sapien et massa fermentum venenatis. Proin eleifend erat
          finibus tellus blandit luctus. Proin sem diam, porttitor quis dictum
          eu, dictum non nibh. Maecenas rutrum lacus blandit nisl feugiat, sed
          efficitur metus porta. Duis varius diam sed ante euismod auctor.
          Quisque vehicula elit nunc, ac facilisis eros fermentum nec. Praesent
          facilisis nec odio non pharetra. Sed nulla elit, maximus non ex vel,
          euismod varius nisl. Nam ornare nulla dapibus, fringilla turpis sed,
          dignissim mauris. Maecenas quis est laoreet velit posuere mattis quis
          at turpis. Donec quis felis elementum lacus pulvinar varius. Phasellus
          eu viverra tellus, at mollis sapien. Duis sed bibendum sapien.
          Suspendisse hendrerit pharetra nisi, sed lacinia ipsum laoreet non.
          Suspendisse est arcu, maximus a porta ac, aliquet et tortor. Curabitur
          id eros varius, pulvinar dui eu, pulvinar magna. Aliquam at nisi dui.
          Maecenas congue et libero eu aliquam. Praesent quis purus at mi
          feugiat bibendum vel vel ante. Donec cursus massa a mi iaculis, vel
          tristique nunc accumsan. Curabitur semper mi sit amet mi euismod
          commodo. Integer auctor dui a libero dignissim fermentum nec quis
          nulla. Suspendisse malesuada felis in nulla aliquet varius. Praesent
          tempus mollis dolor sed convallis. Etiam tincidunt et arcu ut pretium.
          Nam commodo, nunc vel viverra efficitur, augue quam convallis ipsum, a
          placerat arcu odio ut ante. Vestibulum id lacus tortor. Sed sit amet
          libero ac sapien placerat pharetra. Suspendisse massa lacus, suscipit
          at volutpat eget, laoreet in enim. Ut non erat condimentum, finibus
          felis non, tincidunt eros. Integer id urna non est posuere iaculis.
          Nunc aliquam orci et eleifend pulvinar. Maecenas dapibus, neque et
          vulputate mattis, enim sapien dignissim augue, sodales lacinia massa
          velit at lectus. Integer feugiat magna lacinia ipsum hendrerit, in
          fringilla diam maximus. Sed aliquam suscipit malesuada. Aliquam at
          tincidunt lorem, in dapibus diam. Sed eget molestie leo. Curabitur
          imperdiet risus nibh, non iaculis nibh eleifend in. Nunc egestas
          sodales lorem efficitur blandit. Sed sed justo non neque cursus
          venenatis. Pellentesque magna massa, venenatis et tortor nec, interdum
          tincidunt mauris. Aenean eu massa ac velit gravida consectetur. Aenean
          non venenatis ante. Suspendisse vitae urna luctus, facilisis arcu nec,
          venenatis lacus. Mauris nec vestibulum dolor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer suscipit eros diam, et
          facilisis quam accumsan vitae. Quisque consectetur neque a neque
          sodales, eget rhoncus odio tincidunt. Nam faucibus nunc in mattis
          vehicula. Cras a rhoncus ligula.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
