'use strict';
/* global BaseModule */
/* global MockAudioChannelController */

requireApp('system/test/unit/mock_audio_channel_controller.js');
requireApp('system/js/base_module.js');
requireApp('system/js/system_window.js');

suite('system/SystemWindow', function() {
  var subject;

  setup(function() {
    window.AudioChannelController = MockAudioChannelController;
    subject = BaseModule.instantiate('SystemWindow');
    subject.start();
  });

  teardown(function() {
    delete window.AudioChannelController;
  });  

  suite('Initialize the module', function() {
    test('The fake app window ID', function() {
      assert.equal(subject.instanceID, 'systemAppID');
    });

    test('Has no audio channel yet', function() {
      assert.equal(subject.audioChannels.size, 0);
    });

    test('Send MozContentEvent to get audio channels', function(done) {
      var handler = function(evt) {
        window.removeEventListener('mozContentEvent', handler);
        assert.deepEqual(evt.detail, { type: 'system-audiochannel-list' });
        done();
      };
      window.addEventListener('mozContentEvent', handler);
      subject = BaseModule.instantiate('SystemWindow');
      subject.start();
    });
  });

  test('Receive MozChromeEvent to get audio channels', function() {
    window.dispatchEvent(new CustomEvent('mozChromeEvent', {
      detail: {
        type: 'system-audiochannel-list',
        audioChannels: ['normal', 'notification', 'telephony']
      }
    }));
    assert.ok(subject.audioChannels.has('normal'));
    assert.ok(subject.audioChannels.has('notification'));
    assert.ok(subject.audioChannels.has('telephony'));
  });
});
